import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-village',
  templateUrl: './village.component.html',
  styleUrls: ['./village.component.css']
})
export class VillageComponent implements OnInit {

  public logo = '../assets/images/1.jpg';
  public b1 = '../assets/images/b1.jpg';
  public width = 50;
  public res = '../assets/images/res.jpg';
  public r1 = '../assets/images/r1.jpg';

  constructor() { }

  ngOnInit() {
  }


}
