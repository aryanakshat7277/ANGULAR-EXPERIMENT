import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContextService } from './services/context.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  title = 'my-first-app';
  studentName = 'Manoj Kumar Padhi';
  courseTitle = 'Angular (CUST1052)';

  constructor(private contextService: ContextService, private router: Router) {}

  async ngOnInit() {
    const ctx = await this.contextService.init();
    if (ctx && ctx.activeModule) {
      const currentUrl = window.location.pathname;
      const targetUrl = '/' + ctx.activeModule;
      if (!currentUrl.startsWith(targetUrl)) {
        this.router.navigate([ctx.activeModule]);
      }
    }
  }
}
