import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class SliderComponent implements OnInit {
  selectedIndex: number;
  transform: number;
  constructor() {
    this.selectedIndex = 0;
    this.transform = 100;
  }

   sliderArray = [
    {img: 'assets/images/slider_child.jpg', alt: 'crianças se divertindo no mar', title: 'Para você', subtitle: 'Abra sua conta e tenha mais tempo para as pequenas coisas da vida.'},
    {img: 'assets/images/slider-break.jpg', alt: 'reunião de trabalho em um café', title: 'Para sua empresa', subtitle: 'Comodidade e agilidade para sua empresa crescer com segurança.'}
  ];

  ngOnInit() {}

  selected(text) {
    this.downSelected(text);
    this.selectedIndex = text;
   }

   keySelected(text) {
     this.downSelected(text);
     this.selectedIndex = text;
   }
   downSelected(index) {
    this.transform =  100 - (index) * 50;
      this.selectedIndex = this.selectedIndex + 1;
      if(this.selectedIndex > 4) {
        this.selectedIndex = 0;
      }
   }

}


