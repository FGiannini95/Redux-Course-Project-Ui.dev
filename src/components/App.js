import * as React from "react";
import { handleInitialData } from "../actions/shared";
import { useSelector, useDispatch } from "react-redux";
import { Leaderboard } from "./Leaderboard";
import { Dashboard } from "./Dashboard";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authedUser === null);

  React.useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  const store = useSelector((store) => store);
  console.log("store: ", store);

  return (
    <Router>
      <div className="container">{loading === true ? null : <Dashboard />}</div>
    </Router>
  );
}
