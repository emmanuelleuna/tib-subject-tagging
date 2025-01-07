import { Component } from '@angular/core';


@Component({
  selector: 'app-base-screen',
  templateUrl: './base-screen.component.html',
  styleUrl: './base-screen.component.css',
})
export class BaseScreenComponent {

  // DRAWER ---------------------------------------------
  isDrawerVisible = false;

  /**
   * Open drawer navigation
   */
  openDrawer(): void {
    this.isDrawerVisible = true;
  }

  /**
   * Close drawer navigation
   */
  closeDrawer(): void {
    this.isDrawerVisible = false;
  }
}
