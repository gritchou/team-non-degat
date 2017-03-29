import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummonerComponent } from './summoner/summoner.component';
import { TeamComponent } from './team/team.component';
import { TeamService } from './team.service';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [SummonerComponent, TeamComponent],
	providers: [TeamService],
	exports: [TeamComponent]
})
export class TeamModule { }
