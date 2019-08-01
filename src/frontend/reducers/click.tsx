import { INCREMENT, DECREMENT, ClickAction } from '../actions/click';

export interface ClickStateType {
  clicks: number;
}

export const click = (
  state: ClickStateType={clicks: 0},
  action: ClickAction
) => {

  switch(action.type) {
    case INCREMENT:
      return {...state, clicks: (state.clicks || 0) + 1}; 
    case DECREMENT:
      return {...state, clicks: (state.clicks || 0) - 1}; 
    default:
      return {...state};
  }
}
