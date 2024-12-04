import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PanelAmisService {
  private panelAmisVisible = new BehaviorSubject<boolean>(true);
  panelAmisVisible$ = this.panelAmisVisible.asObservable();

  togglePanelAmis() {
    this.panelAmisVisible.next(!this.panelAmisVisible.value);
  }
}
