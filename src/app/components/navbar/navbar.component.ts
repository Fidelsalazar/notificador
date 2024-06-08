import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MenubarModule,
    BadgeModule,
    AvatarModule,
    InputTextModule,
    RippleModule,
    CommonModule,
    OverlayPanelModule,
  ],
  providers:[
    AuthService
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  items: MenuItem[] | undefined;

  constructor(
    private authService: AuthService
  ){}

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
      },
      {
        label: 'Condecoraciones',
        icon: 'pi pi-search',
        items: [
          {
            label: 'Core',
            icon: 'pi pi-bolt',
            shortcut: '⌘+S',
          },
          {
            label: 'Blocks',
            icon: 'pi pi-server',
            shortcut: '⌘+B',
          },
          {
            label: 'UI Kit',
            icon: 'pi pi-pencil',
            shortcut: '⌘+U',
          },
          {
            separator: true,
          },
          {
            label: 'Templates',
            icon: 'pi pi-palette',
            items: [
              {
                label: 'Apollo',
                icon: 'pi pi-palette',
                badge: '2',
              },
              {
                label: 'Ultima',
                icon: 'pi pi-palette',
                badge: '3',
              },
            ],
          },
        ],
      },
      {
        separator: true,
      },
      {
        label: 'Salir',
        icon: 'pi pi-fw pi-power-off',
        command: () => this.close()
      },
    ];
  }

  close(){
    this.authService.logout();
  }
}
