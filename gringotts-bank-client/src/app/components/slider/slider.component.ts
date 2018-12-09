// import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import * as M from '../../../../node_modules/materialize-css/dist/js/materialize.min.js';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  options = { fullWidth: true, indicators: true }
  constructor() {}
  //  sliderArray = [
  //   {img: 'assets/images/slider_child.jpg', alt: 'crianças se divertindo no mar', title: 'Para você', subtitle: 'Abra sua conta e tenha mais tempo para as pequenas coisas da vida.'},
  //   {img: 'assets/images/slider-break.jpg', alt: 'reunião de trabalho em um café', title: 'Para sua empresa', subtitle: 'Comodidade e agilidade para sua empresa crescer com segurança.'}
  // ];

  ngOnInit() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, this.options);
  }



}


