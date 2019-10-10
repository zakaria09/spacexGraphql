import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LaunchDetailsGQL } from '../services/spaceXGraphql.service';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-launch-details',
  templateUrl: './launch-details.component.html',
  styleUrls: ['./launch-details.component.css']
})
export class LaunchDetailsComponent implements OnInit {

  constructor(
    public router: Router,
    private readonly route: ActivatedRoute,
    private readonly launchDetailsService: LaunchDetailsGQL
  ) { }

  launchDetails$ = this.route.paramMap.pipe(
     switchMap(params => {
        const id = params.get('id');
        return this.launchDetailsService.fetch({id});
     }),
     map(res => res.data.launch)
  );

  ngOnInit() {
  }

}
