import { Component } from '@angular/core';
import { DropdownModule } from "primeng/dropdown";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DropdownModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
