import { Component, OnInit } from '@angular/core';
import { ThemeMode } from 'src/app/constants/theme';
import { ThemeService } from 'src/app/services/theme/theme.service';
// ThemeMode;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  themeMode = ThemeMode;
  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {}
}
