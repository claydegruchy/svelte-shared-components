


export type GunConfig = {
	max_clip_size: number
	fire_shot_cooldown_max: number
}

export type User = {
	email: string,
	uid: string,
	name: string,

}

export type Coordinates = { latitude: number, longitude: number };

export type Session = {
	coordinates: Coordinates
	players: User[],
	startTime: number,
	running: boolean
	uid: string
}


export type FiredShot = {
	coordinates: Coordinates,
	user: User,
	sessionId: string,
}