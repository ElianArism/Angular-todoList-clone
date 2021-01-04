import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public darkMode: boolean;
  constructor(private _ThemeService: ThemeService) {}

  changeTheme() { 
    this._ThemeService.changeTheme();
  }
  
  ngOnInit(): void {
    this._ThemeService.theme.subscribe(res => this.darkMode = res);
  }
}


