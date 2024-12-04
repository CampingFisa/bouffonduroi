import {Component, OnInit} from '@angular/core';
import {DockModule} from 'primeng/dock';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    DockModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

  items: MenuItem[] | undefined;

  ngOnInit(): void {
    this.items = [
      {
        label: 'Chrono button',
        icon: 'assets/img/Chrono.png'
      },
      {
        label: 'Swords button',
        icon: 'assets/img/Swords.png'
      },
      {
        label: 'Shuffle button',
        icon: 'assets/img/Shuffle.png'
      }
    ];
  }

}
