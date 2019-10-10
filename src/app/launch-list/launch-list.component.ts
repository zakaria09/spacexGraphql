import { Component, OnInit } from '@angular/core';
import { PastLaunchesListGQL } from '../services/spaceXGraphql.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.css']
})
export class LaunchListComponent implements OnInit {

  constructor(private pastLaunchesService: PastLaunchesListGQL) { }

  pastLaunches$ = this.pastLaunchesService
    .fetch({ limit: 30 })
    .pipe(
      map(
        (res: { data: any }) => res.data.launchesPast
      )
    );

  ngOnInit() {
  }

}
