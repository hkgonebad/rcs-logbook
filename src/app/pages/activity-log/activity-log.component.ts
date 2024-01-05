import { Component } from '@angular/core';

import { faCalendarAlt, faAngleDown } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-activity-log',
  templateUrl: './activity-log.component.html',
  styleUrls: ['./activity-log.component.scss']
})
export class ActivityLogComponent {
  faCalendarAlt = faCalendarAlt;
  faAngleDown = faAngleDown;
}
