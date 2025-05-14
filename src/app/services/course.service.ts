import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Info } from '../models/info';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  //Properties
  url: string = "https://webbutveckling.miun.se/files/ramschema.json";
  constructor(private http: HttpClient) { }

  //Metod
  getCourseInfo(): Observable<Info[]> {
    return this.http.get<Info[]>(this.url);
  }
}
