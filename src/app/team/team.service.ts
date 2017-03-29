import { Injectable } from '@angular/core';
import { Summoner } from '../shared/model/summoner';

import { Observable }     from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { GAMES } from './data/johnnykeats';

const TEAM_PSEUDO = 'JohnnyKeats, ADNestBEAU, Renasakura, sunstice, djulsetc, Pedege, Nané, Achmed62, Bambô, Holligane Aping';
const API_KEY = '<INSERT API KEY HERE>';

const TEAM = [
    {
        "summonerLevel": 30,
        "profileIconId": 20,
        "revisionDate": 1490904758000,
        "id": 21817530,
        "name": "Nané",
		"games": "",
		"degats": 0
    },
    {
        "summonerLevel": 30,
        "profileIconId": 542,
        "revisionDate": 1491061894000,
        "id": 23939260,
        "name": "JohnnyKeats",
		"games": "",
		"degats": 0
    },
    {
        "summonerLevel": 30,
        "profileIconId": 1450,
        "revisionDate": 1490556211000,
        "id": 23528291,
        "name": "Achmed62",
		"games": "",
		"degats": 0
    },
    {
        "summonerLevel": 30,
        "profileIconId": 1449,
        "revisionDate": 1490993339000,
        "id": 23937298,
        "name": "Pedege",
		"games": "",
		"degats": 0
    },
    {
        "summonerLevel": 30,
        "profileIconId": 746,
        "revisionDate": 1491061894000,
        "id": 64978205,
        "name": "djulsetc",
		"games": "",
		"degats": 0
    },
    {
        "summonerLevel": 30,
        "profileIconId": 1392,
        "revisionDate": 1490984531000,
        "id": 21170021,
        "name": "ADNestBEAU",
		"games": "",
		"degats": 0
    },
    {
        "summonerLevel": 30,
        "profileIconId": 1441,
        "revisionDate": 1491061894000,
        "id": 20496365,
        "name": "Bambô",
		"games": "",
		"degats": 0
    },
    {
        "summonerLevel": 30,
        "profileIconId": 1450,
        "revisionDate": 1486667416000,
        "id": 21733721,
        "name": "Holligane Aping",
		"games": "",
		"degats": 0
    },
    {
        "summonerLevel": 30,
        "profileIconId": 1381,
        "revisionDate": 1490978903000,
        "id": 36638038,
        "name": "sunstice",
		"games": "",
		"degats": 0
    },
    {
        "summonerLevel": 30,
        "profileIconId": 1109,
        "revisionDate": 1490639732000,
        "id": 19048116,
        "name": "RenAsakura",
		"games": "",
		"degats": 0
    }
];

@Injectable()
export class TeamService {
	team: Summoner[];
	constructor(private http: Http) {
		const jeff = new Summoner(123456789, 'jeff', 45, 1234567890, 30);
		const kurve = new Summoner(126543456789, 'la kurve', 46, 654654, 30);

		this.team = [jeff, kurve];
	}

	getTeam(): Observable<Summoner[]> {
		return this.http.get(`https://euw.api.riotgames.com/api/lol/EUW/v1.4/summoner/by-name/${TEAM_PSEUDO}?api_key=${API_KEY}`)
			.map(response => response.json().data as Summoner[]);
	}

	getMockedTeam(): Summoner[] {
		return this.sortTeam(this.populateGames(TEAM));
	}

	populateGames(team: Summoner[]): Summoner[] {
		let res = [];
		for(let summoner of team) {
			if(summoner.name === 'JohnnyKeats') {
				summoner.games = GAMES;
				let res = 0;
				GAMES.forEach((game) => res += game.stats.totalDamageDealt);
				summoner.degats = res;
			}
			res.push(summoner);
		}
		return res;
	}

	sortTeam(team: Summoner[]) {
		return team.sort((a, b) => a.degats - b.degats);
	}
}
