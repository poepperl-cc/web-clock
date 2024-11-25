import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DigitalClockComponent } from "./digital-clock/digital-clock.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DigitalClockComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'web-clock';
}
