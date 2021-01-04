import { Component, OnInit, Input } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  private obsDarkMode$: Observable<boolean>;  
  public darkMode: boolean;
  constructor(private _ThemeService: ThemeService) {}

  ngOnInit(): void {
    this.obsDarkMode$ = this._ThemeService.theme;
    this.obsDarkMode$.subscribe(res => { this.darkMode = res; });
  }

}
