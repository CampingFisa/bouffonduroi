import {Component, Input} from '@angular/core';
import {User} from '../../models/user.model';
import {Button} from 'primeng/button';

@Component({
  selector: 'app-pending-friend',
  standalone: true,
  imports: [
    Button
  ],
  templateUrl: './pending-friend.component.html',
  styleUrl: './pending-friend.component.scss'
})
export class PendingFriendComponent {
  @Input() player!: User;

  acceptFriend(player: User) {
    console.log('Accepting ' + player.name);
    // TODO: Implement friend acceptance
  }

  denyFriend(player: User) {
    console.log('Refusing ' + player.name);
    // TODO: Implement friend refusal
  }
}
