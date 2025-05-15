import { Component } from '@angular/core';
import { Info } from '../models/info';
import { CourseService } from '../services/course.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
//Properties
courseInfo: Info[] = [];
searchedCourse: Info[] = [];
searchedValue: string = ""

constructor(private courseService: CourseService) {}

ngOnInit() {
  this.courseService.getCourseInfo().subscribe((courseInfo) => {
    this.courseInfo = courseInfo;
    this.searchedCourse = courseInfo;
  })
}

searchCourse(): void {
  this.searchedCourse = this.courseInfo.filter((info) => {
    return info.code.toLowerCase().includes(this.searchedValue.toLowerCase()) ||
     info.coursename.toLowerCase().includes(this.searchedValue.toLowerCase())
  });
}
}
