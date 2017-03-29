import { Component, OnInit, Input } from '@angular/core';

import { Summoner } from '../../shared/model/summoner';

@Component({
	selector: 'app-summoner',
	templateUrl: './summoner.component.html',
	styleUrls: ['./summoner.component.css']
})
export class SummonerComponent implements OnInit {
	@Input() summoner: Summoner;

	constructor() { }

	ngOnInit() {
	}

}
