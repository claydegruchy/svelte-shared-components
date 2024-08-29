import type { DocumentReference } from "firebase/firestore";



export type GunConfig = {
	max_clip_size: number
	fire_shot_cooldown_max: number
}

export type User = {
	email: string,
	uid: string,
	displayName: string,
	connectedGunId: number,
	activeSessionId: string | null,
}

export type Coordinates = [number, number]

export type Session = {
	uid: string,
	name: string,
	coordinates: Coordinates
	playerIds: string[],
	startTime: number,
	running: boolean
	ref?: DocumentReference
}


export type Event = {
	userId: string,
	ts: number,
	sessionId: string,
	eventName: string,
}

export type FiredShot = {
	eventName: "FiredShot"
	coordinates: Coordinates,
} & Event

export type PlayerHit = {
	eventName: "PlayerHit"
	coordinates: Coordinates,
	shooterId: string,
	damage: number,
	hp: number,
} & Event

export type Reload = {
	eventName: "Reload"
	coordinates: Coordinates,
	wastedBullets: number,
} & Event

export type PlayerDied = {
	eventName: "PlayerDied"
	coordinates: Coordinates,
} & Event

export type PlayerSpawn = {
	eventName: "PlayerSpawn"
	coordinates: Coordinates,
} & Event
