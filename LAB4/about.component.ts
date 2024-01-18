import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  position = "Student";
  work_experience = "N/A";
  email = "perezbembi@gmail.com";
  website = "N/A";
  phone = "+63-915-720-4303";
  imageUrl : string = "src\assets\profilePic.jpg";
  imageW: number = 60;
  imageH: number = 80;
}
