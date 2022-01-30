export enum EVENTS_NAME {
  gameEnd = 'game-end',
  chestLoot = 'chest-loot',
  attack = 'attack',
  hpChange = 'hp-change',
}

export enum GameStatus {
  WIN,
  LOSE,
}

export type UpdateLifeOperation = 'INCREMENT' | 'DECREMENT';
