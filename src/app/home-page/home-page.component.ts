import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FormsModule } from '@angular/forms';
import { userCard } from "./userCards/user-card.component";
import { slider } from "./slider/slider.component";
import { CommonModule } from '@angular/common';
import { SearchComponent } from "../vacation-requests/vacation-requests.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavbarComponent, FormsModule, userCard, slider, CommonModule, SearchComponent], 
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'] // Note the correct plural form
})

export class HomePageComponent {
      
      welcomeMassege = "Welcome Back Yamen! Here are your latest updates.";
      handleClick() {
       alert("This is to apply Event Binding");
      }

    

      
}
