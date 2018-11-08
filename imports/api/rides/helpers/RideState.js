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

let currentState = partnerMachine.initialState;

class RideState {
  setPending = passengerId => {
    const newState = partnerMachine.transition(currentState, "TO_PENDING");
    currentState = newState;
    console.log(passengerId);
    Rides.update(
      { driverId: Meteor.userId() },
      {
        $set: {
          passengerId: passengerId,
          rideStates: newState.value
          // rideStates: STATES[newState.value] <- Do I need it set to this ??
        }
      }
    );
  };

  setMatched = () => {
    const newState = partnerMachine.transition(
      (currentState = newState),
      "TO_MATCHED"
    );

    Rides.update(
      { passengerId: Meteor.userId() },
      { $set: { rideStates: STATES[newState.value] } }
    );
  };

  setInitialFromMatched = () => {
    const newState = partnerMachine.transition(
      this.state.current,
      "TO_INITIAL"
    );
    Rides.update({ ...STATES[newState.value], current: newState.value });
  };

  setInitialFromPending = () => {
    const newState = partnerMachine.transition(
      this.state.current,
      "TO_INITIAL"
    );
    Rides.update(
      {
        /*query with this.userId*/
      },
      { ...STATES[newState.value], current: newState.value }
    );
  };
}

export default RideState;
