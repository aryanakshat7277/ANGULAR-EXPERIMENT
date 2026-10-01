import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './app.html',
  styles: [`
    .navbar { display: flex; gap: 15px; padding: 10px; background: #eee; }
    .navbar a { text-decoration: none; font-weight: bold; color: #333; }
    .active-link { color: #007acc; border-bottom: 2px solid #007acc; }
    .outlet-box { padding: 20px; }
  `]
})
export class App {}
