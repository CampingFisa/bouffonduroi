import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import {FriendComponent} from '../components/friend/friend.component';
import {User} from '../models/user.model';
import {UserService} from '../services/user.service';
import {IconFieldModule} from 'primeng/iconfield';
import {InputIconModule} from 'primeng/inputicon';
import {InputTextModule} from 'primeng/inputtext';
import {PendingFriendComponent} from '../components/pending-friend/pending-friend.component';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-panel-amis',
  standalone: true,
  imports: [
    CommonModule,
    TabViewModule,
    FriendComponent,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    PendingFriendComponent,
    FormsModule
  ],
  templateUrl: './panel-amis.component.html',
  styleUrl: './panel-amis.component.scss'
})

export class PanelAmisComponent {
  friends: User[] = [];
  pendingFriends: User[] = [];
  activeTab = 0;
  newFriendName: any;

  constructor(private userService: UserService) {}

  selectTab(index: number) {
    this.activeTab = index;
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.friends = users;
      this.pendingFriends = users;
    });

  }

  addFriend(newFriendName: any) {
    console.log('Adding ' + newFriendName);
    // TODO: Implement friend addition
  }
}
