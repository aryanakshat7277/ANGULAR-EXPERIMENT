import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

export interface AppContext {
  cwd: string;
  activeModule: string;
  activeExp: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContextService {
  currentContext: AppContext | null = null;
  activeExp = 'all';

  constructor(private http: HttpClient, private router: Router) {}

  async init(): Promise<AppContext | null> {
    if (this.currentContext) return this.currentContext;
    try {
      const ctx = await firstValueFrom(this.http.get<AppContext>('/api/current-context'));
      this.currentContext = ctx;
      if (ctx && ctx.activeExp) {
        this.activeExp = ctx.activeExp;
      }
      return ctx;
    } catch {
      return null;
    }
  }

  getExpForModule(modulePrefix: string): string {
    if (this.activeExp && this.activeExp.startsWith(modulePrefix)) {
      return this.activeExp;
    }
    return 'all';
  }
}
