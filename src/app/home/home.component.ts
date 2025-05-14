import { Component } from '@angular/core';
import { Info } from '../models/info';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
//Properties
courseInfo: Info[] = [];

constructor(private courseService: CourseService) {}

ngOnInit() {
  this.courseService.getCourseInfo().subscribe((courseInfo) => {
    this.courseInfo = courseInfo;
  })
}
}
