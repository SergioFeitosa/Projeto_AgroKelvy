import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-milho',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule, RouterModule],
  templateUrl: './milho.component.html',
  styleUrl: './milho.component.css'

})
export class MilhoComponent {
  
}