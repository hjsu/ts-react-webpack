export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export interface ClickAction {
  type: typeof INCREMENT | typeof DECREMENT
}

export const increment: ClickAction = {type: INCREMENT};

export const decrement: ClickAction = {type: DECREMENT};
