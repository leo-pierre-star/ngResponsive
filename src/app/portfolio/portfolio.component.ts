import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }
  portfolio = [
    {
      title: 'Titre 1',
      src: 'p1',
      alt: 't1',
    },
    {
      title: 'Titre 2',
      src: 'p2',
      alt: 't2',
    },
    {
      title: 'Titre 3',
      src: 'p3',
      alt: 't3',
    },
    {
      title: 'Titre 4',
      src: 'p4',
      alt: 't4',
    },

    {
      title: 'Titre 5',
      src: 'p1',
      alt: 't5',
    },
    {
      title: 'Titre 6',
      src: 'p2',
      alt: 't6',
    },
    {
      title: 'Titre 7',
      src: 'p3',
      alt: 't7',
    },
    {
      title: 'Titre 8',
      src: 'p4',
      alt: 't8',
    },

    {
      title: 'Titre 10',
      src: 'p1',
      alt: 't10',
    },
    {
      title: 'Titre 11',
      src: 'p2',
      alt: 't11',
    },
    {
      title: 'Titre 12',
      src: 'p3',
      alt: 't12',
    },
    {
      title: 'Titre 13',
      src: 'p4',
      alt: 't13',
    },
  ]
  ngOnInit(): void {
  }

}
