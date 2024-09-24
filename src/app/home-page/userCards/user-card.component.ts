import { Component } from "@angular/core";


@Component({
  selector: 'user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
})
export class userCard {
  title = 'first-assigment';
  profileData = {
    name: "Yamen Amjed",
    title: "Java Developer",
    imageSrc: "https://avatars.githubusercontent.com/u/165961256?v=4",
    reportingTo: "Salwa Assem",
    level: "level 10",
    viewProfileLink: "viewProfile.html"
  };
}
