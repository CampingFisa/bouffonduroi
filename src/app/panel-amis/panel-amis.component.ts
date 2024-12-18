import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'app-panel-amis',
  standalone: true,
  imports: [CommonModule, TabViewModule],
  templateUrl: './panel-amis.component.html',
  styleUrl: './panel-amis.component.scss',
})
export class PanelAmisComponent {
  activeTab = 0; // Onglet actif
  tabs = [
    { icon: '👤' }, // Icone de l'onglet 1
    { icon: '👥' }, // Icone de l'onglet 2
  ];

  selectTab(index: number) {
    this.activeTab = index;
  }
}
