import { Component, Inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {
  INITIAL_PATH,
  MF_LIST_EVENT_NAME,
  SHELL_ROUTER_EVENT_NAME,
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
    @Inject(SHELL_ROUTER_EVENT_NAME) private sellRouterEventName: string,
    @Inject(MF_LIST_EVENT_NAME) private mfListEventName: string[],
    @Inject(INITIAL_PATH) private initialPath: string
  ) {}

  ngOnInit() {
    if (this.initialPath) {
      this.router.navigateByUrl(this.initialPath);
    }
    this.router.events.subscribe((obs) => {
      if (obs instanceof NavigationEnd && this.sellRouterEventName) {
        const customEvent = new CustomEvent(this.sellRouterEventName, {
          detail: obs.url,
        });
        window.dispatchEvent(customEvent);
      }
    });

    this.mfListEventName.forEach((m) => {
      window.addEventListener(m, (e) => {
        const event = e as CustomEvent;
        if (event.detail !== this.router.url) {
          this.router.navigateByUrl(event.detail);
        }
      });
    });
  }

  ngOnDestroy() {
    this.mfListEventName.forEach((m) => {
      window.removeEventListener(m, () => {
        console.log(`${m} event is removed`);
      });
    });
  }
}
