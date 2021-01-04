import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkMode: string;
  private dmSubject$ = new Subject<boolean>();
  
  constructor() {
    this.darkMode = localStorage.getItem('theme') || 'light';
  }

  get theme(): Observable<boolean> {
    return this.dmSubject$.asObservable();
  }
  
  changeTheme() {
    let theme;
    if(this.darkMode === 'light') {
      theme = true;
      this.darkMode = 'black';
    } else {
      theme = false;
      this.darkMode = 'light';
    }

    localStorage.setItem('theme', `${this.darkMode}`);
    this.dmSubject$.next(theme);
  }
}
