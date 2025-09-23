import { savePoll } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const ADD_POLL = "ADD_POLL";
export const RECEIVE_POLLS = "RECEIVE_POLLS";

function addPoll(poll) {
  return {
    type: ADD_POLL,
    poll,
  };
}

export function receivePolls(polls) {
  return {
    type: RECEIVE_POLLS,
    polls,
  };
}

// We want to create a thunk to incupsulate all the async logic for adding a new poll and export that rather than the simple action creator

export function handleAddPoll(poll) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());

    return savePoll({
      ...poll,
      author: authedUser,
    })
      .then((poll) => dispatch(addPoll(poll)))
      .then(() => dispatch(hideLoading()));
  };
}
