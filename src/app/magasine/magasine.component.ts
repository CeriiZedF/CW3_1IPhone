import { Component } from '@angular/core';

@Component({
  selector: 'app-magasine',
  templateUrl: './magasine.component.html',
  styleUrl: './magasine.component.css'
})
export class MagasineComponent {
  Iphones: any[] = [
    {
      src: '/assets/images/all.jpg',
      color: '' 
    },
    {
      src: '/assets/images/black.jpg',
      color: 'black' 
    },
    {
      src: '/assets/images/blue.jpg',
      color: 'white' 
    },
    {
      src: '/assets/images/green.jpg',
      color: 'green' 
    },
    {
      src: '/assets/images/pink.jpg',
      color: 'pink' 
    },
    {
      src: '/assets/images/yellow.jpg',
      color: 'yellow' 
    },
  ]

  selected_image = this.Iphones[0];

  onSelect(item:object)
  {
    this.selected_image = item;
  }
}

