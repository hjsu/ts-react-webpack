import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { StoreStateType } from '../store';
import { increment, decrement, ClickAction } from '../actions/click';

interface Props {
  clicks?: number;
  increment: () => void;
  decrement: () => void;
}

const HelloComponent = (props: Props) => (
  <div>
    <h1>Hello World!</h1>
    <p>Count: {props.clicks} </p>
    <button onClick={props.increment}>+</button>
    <button onClick={props.decrement}>-</button>
  </div>
) 

const mapStateToProps = (state: StoreStateType) => (
  {clicks: state.click.clicks}
);

const mapDispatchToProps = (dispatch: Dispatch<ClickAction>) => (
  {
    increment: () => dispatch(increment),
    decrement: () => dispatch(decrement)
  }
);

export const Click = connect(
  mapStateToProps, mapDispatchToProps)(HelloComponent);
