import { Machine } from "xstate";
import { Rides } from "../rides";
import { Meteor } from "meteor/meteor";
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

let initialState = partnerMachine.initialState;

class RideState {
  constructor() {
    this.currentState = initialState;
  }

  setPending = passengerId => {
    this.currentState = partnerMachine.transition(
      this.currentState,
      "TO_PENDING"
    );
    console.log(this.currentState.value);
    Rides.update(
      { driverId: Meteor.userId() },
      {
        $set: {
          passengerId: passengerId,
          rideStates: this.currentState.value
          // rideStates: STATES[newState.value] <- Do I need it set to this ??
        }
      }
    );
  };

  setMatched = () => {
    this.currentState = partnerMachine.transition(
      this.currentState,
      "TO_MATCHED"
    );
    Rides.update(
      { passengerId: Meteor.userId() },
      { $set: { rideStates: this.currentState.value } }
    );
  };

  setInitialFromMatched = () => {
    this.currentState = partnerMachine.transition(
      this.currentState,
      "TO_INITIAL"
    );
    Rides.update({ ...STATES[this.currentState], current: this.currentState });
  };

  setInitialFromPending = () => {
    this.currentState = partnerMachine.transition(
      this.currentState,
      "TO_INITIAL"
    );
    console.log(this.currentState.value);
    Rides.update(
      { passengerId: Meteor.userId() },
      { $set: { rideStates: "initial", passengerId: "" } }
    );
  };
}

export default RideState;
