import { Component, Inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {
  INITIAL_PATH,
  EVENT_NAME_TO_BE_UPDATED_FROM_SHELL_ROUTING_CHANGES,
  EVENT_NAME_TO_UPDATE_SHELL_FROM_ROUTING_CHANGES,
} from 'src/bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mfe1';

  constructor(
    private router: Router,
    @Inject(EVENT_NAME_TO_UPDATE_SHELL_FROM_ROUTING_CHANGES) private eventNameToUpdateShellFromRoutingChanges: string,
    @Inject(EVENT_NAME_TO_BE_UPDATED_FROM_SHELL_ROUTING_CHANGES) private eventNameToBeUpdatedFromShellRoutingChanges: string,
    @Inject(INITIAL_PATH) private initialPath: string
  ) {}

  ngOnInit() {
    if (this.initialPath) {
      this.router.navigateByUrl(this.initialPath);
    }
    this.router.events.subscribe((obs) => {
      if (obs instanceof NavigationEnd && this.eventNameToUpdateShellFromRoutingChanges) {
        const customEvent = new CustomEvent(this.eventNameToUpdateShellFromRoutingChanges, {
          detail: obs.url,
        });
        window.dispatchEvent(customEvent);
      }
    });

    if(this.eventNameToBeUpdatedFromShellRoutingChanges){
      window.addEventListener(this.eventNameToBeUpdatedFromShellRoutingChanges, (e) => {
        const event = e as CustomEvent;
        if (event.detail !== this.router.url) {
          this.router.navigateByUrl(event.detail);
        }
      });
    }

  }

  ngOnDestroy() {
    if(this.eventNameToBeUpdatedFromShellRoutingChanges){
      window.removeEventListener(this.eventNameToBeUpdatedFromShellRoutingChanges, () => {
        console.log(`${this.eventNameToBeUpdatedFromShellRoutingChanges} event is removed from mfe1`);
      });
    }
  }
}
