import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
pseudo: string;
  constructor() { }

  ngOnInit() {
    this.pseudo=localStorage.getItem('pseudo');
  }

}
