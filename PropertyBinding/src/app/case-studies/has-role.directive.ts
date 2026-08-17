import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHasRole]',
  standalone: true
})
export class HasRoleDirective {
  @Input() set appHasRole(role: string) {
    const currentUserRole = 'editor'; // Mock current logged in user role
    this.viewContainer.clear();
    if (currentUserRole === role) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

  constructor(
    private templateRef: TemplateRef<unknown>,
    private viewContainer: ViewContainerRef
  ) {}
}
