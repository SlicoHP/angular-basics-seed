import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'donut-list',
  template: `
    <div>
      <donut-card [donut]="donuts[0]"></donut-card>
      <donut-card [donut]="donuts[1]"></donut-card>
      <donut-card [donut]="donuts[2]"></donut-card>
    </div>
  `,
  styles: [
   
  ]
})
export class DonutListComponent implements OnInit {
  donuts!: Donut[]

  constructor() { }

  ngOnInit(): void {
    this.donuts = [
      {
        id: 'y2jw23',
        name: 'Just Chocolate',
        icon: 'just-chocolate',
        price: 119,
        description: 'For the pure chocoholic.'
      },
      {
        id: '82uwj3',
        name: 'Glazed Fudge',
        icon: 'glazed-fudge',
        price: 129,
        promo: true,
        description: 'Sticky perfection.'
      },
      {
        id: '823jeh',
        name: 'Caramel Swirl',
        icon: 'caramel-swirl',
        price: 232,
        description: 'Chocolate drizzed.'
      }
    ];

  }

}
