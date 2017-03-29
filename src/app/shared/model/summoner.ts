export class Summoner {
	summonerLevel: number;
	profileIconId: number;
	revisionDate: number;
	id: number;
	name: string;
	games;
	degats;

	constructor(id, name, summonerLevel, profileIconId, revisionDate) {
		this.summonerLevel = summonerLevel;
		this.profileIconId = profileIconId;
		this.revisionDate = revisionDate;
		this.id = id;
		this.name = name;
	}

}
