import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {
  setCount:number
  galleryDetails=['Green Swing', 'Project A', 'Project B', 'Project C', 'Project D', 'Project E']
  constructor() { }
  setData(data){
    this.setCount = data
    
  }
  getData(){
    return this.galleryDetails
  }
  gallery=[
    ['./../../../../assets/gallery/small\ image\ 1.png',
    './../../../../assets/gallery/small\ image\ 2.png',
    './../../../../assets/gallery/small\ image\ 3.png',
    './../../../../assets/gallery/small\ image\ 4.png',
    './../../../../assets/gallery/small\ image\ 5.png',
    './../../../../assets/gallery/small\ image\ 6.png',
    './../../../../assets/gallery/small\ image\ 7.png',
    './../../../../assets/gallery/small\ image\ 8.png',
    './../../../../assets/gallery/small\ image\ 9.png',
    './../../../../assets/gallery/small\ image\ 10.png'],
    ['./../../../../assets/gallery/small\ image\ 1.png',
    './../../../../assets/gallery/small\ image\ 2.png',],
    [],
    [],
    [],
    []

  ]
}
