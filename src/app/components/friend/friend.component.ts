import {Component, Input} from '@angular/core';
import {User} from '../../models/user.model';
import {Button} from 'primeng/button';

@Component({
  selector: 'app-friend',
  standalone: true,
  imports: [
    Button
  ],
  templateUrl: './friend.component.html',
  styleUrl: './friend.component.scss'
})
export class FriendComponent {
  @Input() player!: User;

  playWithFriend(player: User) {
    console.log('Playing with ' + player.name);
  }

}
