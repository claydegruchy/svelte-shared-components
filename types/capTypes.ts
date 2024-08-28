import type { DocumentReference } from "firebase/firestore";



export type GunConfig = {
	max_clip_size: number
	fire_shot_cooldown_max: number
}

export type User = {
	email: string,
	uid: string,
	name: string,

}

export type Coordinates = [number, number]

export type Session = {
	uid: string,
	name: string,
	coordinates: Coordinates
	players: User[],
	startTime: number,
	running: boolean
	ref?: DocumentReference
}


export type FiredShot = {
	coordinates: Coordinates,
	userId: User,
	sessionId: string,
	ts: number,
}