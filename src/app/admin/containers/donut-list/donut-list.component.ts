import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'donut-list',
  template: `
    <div>
      <ng-container *ngIf="donuts.length; else nothing">
        <donut-card
          *ngFor="let donut of donuts; trackBy: trackById"
          [donut]="donut"
          
        ></donut-card>
      </ng-container>
      <ng-template #nothing>
        <p>No Donuts here...</p>
      </ng-template>
    </div>
  `,
  styles: [],
})
export class DonutListComponent implements OnInit {
  donuts!: Donut[];

  constructor() {}

  ngOnInit(): void {
    this.donuts = [
      {
        id: 'y2jw23',
        name: 'Just Chocolate',
        icon: 'just-chocolate',
        price: 119,
        description: 'For the pure chocoholic.',
      },
      {
        id: '82uwj3',
        name: 'Glazed Fudge',
        icon: 'glazed-fudge',
        price: 129,
        promo: 'new',
        description: 'Sticky perfection.',
      },
      {
        id: '823jeh',
        name: 'Caramel Swirl',
        icon: 'caramel-swirl',
        price: 232,
        promo: "limited",
        description: 'Chocolate drizzed.',
      },
      {
        id: '2h3jw8',
        name: 'Sour Supreme',
        icon: 'sour-supreme',
        price: 198,
        promo: "limited",
        description: 'Delicious lucios lemon.',
      },
    ];
  }

  trackById(index: Number, value: Donut) {
    return value.id;
  }
}
