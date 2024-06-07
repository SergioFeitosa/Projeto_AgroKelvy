import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { RouterModule } from '@angular/router';
import { HeaderService } from '../../template/header/header.service';
import { ForDirective } from '../../directives/for.directive';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-mineral',
  standalone: true,
  imports: [
    MatCardModule, 
    ForDirective, 
    RouterModule,
    SlickCarouselModule,
    CommonModule
  ],
  templateUrl: './mineral.component.html',
  styleUrl: './mineral.component.css',
  
})
export class MineralComponent implements OnInit{
  
  constructor(private headerService: HeaderService) { 
    this.headerService.headerData = {
      title: 'Mineral',
      icon: 'hub',
      routeUrl: '',
    }    
  }
  ngOnInit(): void {
  }
  
  slides = [
    {img: "/carousel/browser/assets/images/cobre.jpg",title: "Cobre",routeUrl: "cobre"},
    {img: "/carousel/browser/assets/images/ferro.jpg",title: "Ferro",routeUrl: "cafe"},
    {img: "/carousel/browser/assets/images/grafita.jpg",title: "Grafite",routeUrl: "grafite"},
    {img: "/carousel/browser/assets/images/ouro.jpg",title: "Ouro",routeUrl: "ouro"},
  ]

  slideConfig = {
    "slidesToShow": 4, 
    "slidesToScroll": 4,
    "autoplay": true,
    "autoplaySpeed": 5000,
    "pauseOnHover": true,
    "inifinite": true,
    "responsive": [
      {
        "breakpoint": 992,
        "settings": {
          "arrows": true,
          "inifinite": true,
          "slidesToShow": 3,
          "slidesToScroll": 3
        }
      },
      {
        "breakpoint": 768,
        "settings": {
          "arrows": true,
          "inifinite": true,
          "slidesToShow": 1,
          "slidesToScroll": 1
        }
      },
    ]    
  };

  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777",title: "teste",routeUrl:"cafe"})
  }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
}


