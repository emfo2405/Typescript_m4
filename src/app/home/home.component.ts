import { Component, inject, signal } from '@angular/core';
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
courseInfo = signal<Info[]>([])
searchedCourse = signal<Info[]>([])
searchedValue = signal<string>("")

courseService = inject(CourseService);


ngOnInit() {
  this.courseService.getCourseInfo().subscribe((courseInfo) => {
    this.courseInfo.set(courseInfo);
    this.searchedCourse.set(courseInfo);
  })
}

searchCourse(): void {
  let searched = this.courseInfo().filter((info) => {
    return info.code.toLowerCase().includes(this.searchedValue().toLowerCase()) ||
     info.coursename.toLowerCase().includes(this.searchedValue().toLowerCase())
  });

  this.searchedCourse.set(searched);
}
}
