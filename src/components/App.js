import * as React from "react";
import { handleInitialData } from "../actions/shared";
import { useSelector, useDispatch } from "react-redux";

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authedUser === null);

  React.useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  const store = useSelector((store) => store);
  console.log("store: ", store);

  return (
    <div className="container">
      {loading === true ? null : <div>Redux Polls</div>}
    </div>
  );
}
