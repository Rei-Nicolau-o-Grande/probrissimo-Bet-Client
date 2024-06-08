import { Component, EventEmitter, inject, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FormAuthComponent } from '../form-auth/form-auth.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatIconModule,
    MatDialogModule,
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private dialogService = inject(MatDialog);
  @Output() eventFormAuth: any = new EventEmitter();
  public isMenuOpen: boolean = false;

  public handleOpenModal(isLoginOrCreateUser: boolean): void {
    this.dialogService.open(FormAuthComponent, {
      width: '700px',
      height: '400px',
      data: isLoginOrCreateUser
    });
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  public sendEventFormAuth(event: boolean): void {
    this.eventFormAuth.emit(event);
  }

}
