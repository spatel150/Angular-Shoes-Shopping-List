import { ShoeService } from './shoe.service';
import {Component, OnInit } from '@angular/core'
import { ShoeList } from './shoe';

@Component({
  selector: 'sm-shoes',
  templateUrl: './shoe-table.component.html',
  styleUrls: ['./shoe-table.component.css']
})
export class ShoeTableComponent implements OnInit {
  pageTitle: string = "Sam's Shoe Store";
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;

  _listFilter: string ;
  errorMessage: any;
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredShoes = this.listFilter ? this.shoeFilter(this.listFilter) : this.shoes;
  }

  filteredShoes: ShoeList[];
  shoes: ShoeList[] = []

  constructor(private shoeService: ShoeService) {

  }

  shoeFilter(filterBy: string): ShoeList[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.shoes.filter((shoe: ShoeList) =>
    shoe.shoeName.toLocaleLowerCase().indexOf(filterBy) !== -1)
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.shoeService.getShoes().subscribe({
      next: shoes => {
        this.shoes = shoes,
        this.filteredShoes = this.shoes;
      },
      error: err => this.errorMessage = err
    })
  }

  // imageWidth: number = 50;
  // imageMargin: number = 2;
  // showImage: boolean = false;
  // errorMessage: string;

  // _listFilter: string;

  // get listFilter(): string {
  //   return this._listFilter;
  // }

  // set listFilter(value: string) {
  //   this._listFilter = value;
  //   this.filteredShoes = this.listFilter ? this.performFilter(this.listFilter) : this.shoes;
  // }
}
