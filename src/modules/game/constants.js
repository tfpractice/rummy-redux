export const ADD_PLAYER = 'ADD_PLAYER';
export const REMOVE_PLAYER = 'REMOVE_PLAYER';

export const CLAIM = 'CLAIM';
export const CLAIM_CARDS = 'CLAIM_CARDS';
export const CLEAR_GAME = 'CLEAR_GAME';
export const PLAYER_CLAIM_PARTS = 'PLAYER_CLAIM_PARTS';
export const PLAYER_CLAIM_SET = 'PLAYER_CLAIM_SET';
export const DEAL = 'DEAL';
export const DECK_DEL = 'DECK_DEL';
export const DECK_DRAW = 'DECK_DRAW';
export const DECK_DROP = 'DECK_DROP';
export const DIS_ADD = 'DIS_ADD';
export const DIS_DEL = 'DIS_DEL';
export const DIS_DRAW = 'DIS_DRAW';
export const DRAW = 'DRAW';
export const DRAW_NEXT = 'DRAW_NEXT';
export const DRAW_TO = 'DRAW_TO';
export const DROP = 'DROP';
export const DROP_NEXT = 'DROP_NEXT';
export const PLAY = 'PLAY';
export const PLAYABLE = 'PLAYABLE';
export const PLAY_PARTIAL = 'PLAY_PARTIAL';
export const PLAY_WHOLE = 'PLAY_WHOLE';
export const RUM_CHECK = 'RUM_CHECK';
export const RUM_DROP = 'RUM_DROP';
export const RUMMABLE = 'RUMMABLE';
export const RUMMY = 'RUMMY';
export const SET_DECK = 'SET_DECK';
export const SET_DISCARD = 'SET_DISCARD';
export const SET_PLAYERS = 'SET_PLAYERS';
export const SCRAP_CARDS = 'SCRAP_CARDS';
export const SHIFT_DECK = 'SHIFT_DECK';
export const TURN_GAME = 'TURN_GAME';
export const UPDATE_GAME = 'UPDATE_GAME';

export const PLAYER_ACTIONS = new Set([ ADD_PLAYER,
  CLAIM_CARDS,
  PLAY,
  SCRAP_CARDS,
  REMOVE_PLAYER,
  SET_PLAYERS,
  TURN_GAME, ]);
  
export const DECK_ACTIONS = new Set([
  DEAL, DECK_DRAW, DROP_NEXT, SET_DECK, SHIFT_DECK,
]);

export const DISCARD_ACTIONS = new Set([
  DIS_ADD, DRAW_TO, SET_DISCARD, SET_DISCARD,
]);
export const GAME_ACTIONS = new Set([
  ADD_PLAYER,
  REMOVE_PLAYER,
  CLAIM,
  CLEAR_GAME,
  ...PLAYER_ACTIONS,
  CLAIM_CARDS,
  PLAYER_CLAIM_PARTS,
  PLAYER_CLAIM_SET,
  DEAL,
  DECK_DEL,
  DECK_DRAW,
  DECK_DROP,
  DIS_ADD,
  DIS_DEL,
  DIS_DRAW,
  DRAW,
  DRAW_NEXT,
  DRAW_TO,
  DROP,
  DROP_NEXT,
  PLAY,
  PLAYABLE,
  PLAY_PARTIAL,
  PLAY_WHOLE,
  RUM_CHECK,
  RUM_DROP,
  RUMMABLE,
  RUMMY,
  TURN_GAME,
  SET_DECK,
  SET_DISCARD,
  SET_PLAYERS,
  SHIFT_DECK,
  UPDATE_GAME,
]);
