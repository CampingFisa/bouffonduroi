import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import {FriendComponent} from '../components/friend/friend.component';
import {User} from '../models/user.model';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-panel-amis',
  standalone: true,
  imports: [
    CommonModule,
    TabViewModule,
    FriendComponent
  ],
  templateUrl: './panel-amis.component.html',
  styleUrl: './panel-amis.component.scss'
})

export class PanelAmisComponent {
  friends: User[] = [];
  activeTab = 0;

  constructor(private userService: UserService) {}

  selectTab(index: number) {
    this.activeTab = index;
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.friends = users;
    });
  }

}
