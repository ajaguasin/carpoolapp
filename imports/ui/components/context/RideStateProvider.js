import React, { Component } from "react";
import { Machine } from "xstate";
export const RideStateContext = React.createContext();

const STATES = {
  initial: {
    partnerId: false,
    pending: false,
    partnerMatched: false
  },
  pending: {
    partnerId: true,
    pending: true,
    partnerMatched: false
  },
  matched: {
    partnerId: true,
    pending: false,
    partnerMatched: true
  }
};

const partnerMachine = Machine({
  key: "ride",
  initial: "initial",
  states: {
    initial: {
      on: {
        TO_PENDING: "pending"
      }
    },
    pending: {
      on: {
        TO_INITIAL: "initial"
      },
      on: {
        TO_MATCHED: "matched"
      }
    },
    matched: {
      on: {
        TO_INITIAL: "initial"
      }
    }
  }
});

export default class RideStateProvider extends Component {
  constructor() {
    super();
    this.state = {
      ...STATES.initial
    };
  }

  setPending = () => {
    const newState = partnerMachine.transition(
      partnerMachine.currentState,
      "TO_PENDING"
    );
    this.setState(STATES[newState.value]);
  };

  setMatched = () => {
    const newState = partnerMachine.transition(
      partnerMachine.currentState,
      "TO_MATCHED"
    );
    this.setState(STATES[newState.value]);
  };

  setInitial = () => {
    const newState = partnerMachine.transition(
      partnerMachine.currentState,
      "TO_INITIAL"
    );
    this.setState(STATES[newState.value]);
  };

  render() {
    return (
      <RideStateContext.Provider
        value={{
          rideStatus: this.state,
          setInitial: this.setInitial,
          setMatched: this.setMatched,
          setPending: this.setPending
        }}
      >
        {this.props.children}
      </RideStateContext.Provider>
    );
  }
}
