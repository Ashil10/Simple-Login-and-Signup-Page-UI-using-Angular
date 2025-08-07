import { Component } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,DropdownModule,ButtonModule,FormsModule,CarouselModule, ReactiveFormsModule,RouterModule,CardModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

selectedCountry: string = '';
countries=[
  {label:'India', value:'IN'},
  {label:'USA', value:'US'},
  {label:'UK', value:'UK'}
];

selectedState: string = '';

states=[
  {label:'Kerala', value:'KL'},
  {label:'California', value:'CA'},
  {label:'London', value:'LDN'}
];
reviews = [
  {
    headline: 'Smooth onboarding!',
    name: 'Ashil',
    review: 'Great service!',
  },
  {
    headline: 'I barely had to do anything',
    name: 'Catherine Johns',
    review: 'Love the experience. Got my business set up and all necessary details in about a month and I barely had to do anything. Definitely recommend!',
  },
  {
    headline: 'Effortless and fast!',
    name: 'Maya Patel',
    review: 'Everything was handled professionally. I was surprised how smooth the whole process was.',
  },
  {
    headline: 'Clear and responsive',
    name: 'Daniel Kim',
    review: 'Clear instructions, responsive support team, and a streamlined setup. Would definitely use again.',
  },
  {
    headline: 'Seamless legal setup',
    name: 'Ava Thompson',
    review: 'The UI is intuitive and the onboarding process was seamless. Took care of the legal side without the headache.',
  },
  {
    headline: 'Stress-free paperwork',
    name: 'Ravi Menon',
    review: 'I expected paperwork chaos, but it was simple and quick. Big thumbs up for making business formation this easy!',
  },
];


constructor(private router: Router) {}

}
