import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';

import { Observable }     from 'rxjs/Observable';

import { Summoner } from '../../shared/model/summoner';

@Component({
	selector: 'app-team',
	templateUrl: './team.component.html',
	styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
	// team: Observable<Summoner[]>;
	team: Summoner[];
	constructor(private teamService: TeamService) { }

	ngOnInit() {
		// this.team = this.teamService.getTeam();
		this.team = this.teamService.getMockedTeam();
	}

}
