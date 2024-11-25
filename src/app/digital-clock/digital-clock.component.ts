import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-digital-clock',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './digital-clock.component.html',
  styleUrl: './digital-clock.component.scss'
})
export class DigitalClockComponent {
  currentTime: Date = new Date();

  constructor() {
    registerLocaleData(localeDe)
  }

  ngOnInit(): void {
    this.updateTime();
  }

  updateTime(): void {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }
}
