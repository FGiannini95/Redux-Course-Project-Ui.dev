import { hideLoading, showLoading } from "react-redux-loading-bar";
import { savePollAnswer } from "../utils/api";

export const ADD_ANSWER = "ADD_ANSWER";

function addAnswer({ authedUser, id, answer }) {
  return {
    type: ADD_ANSWER,
    authedUser,
    id,
    answer,
  };
}

export function handleAddAnswer(answerData) {
  return (dispatch) => {
    dispatch(showLoading());

    return savePollAnswer({
      ...answerData,
    })
      .then((answerData) => dispatch(addAnswer(answerData)))
      .then(() => dispatch(hideLoading()));
  };
}
