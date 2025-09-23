import React, { useState } from "react";
import { handleAddPoll } from "../actions/polls";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export const AddPoll = () => {
  const [options, setOptions] = useState({ a: "", b: "", c: "", d: "" });
  const [question, setQuestion] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
    dispatch(
      handleAddPoll({
        question,
        ...options,
      })
    );
  };

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setOptions({
      ...options,
      [name]: value,
    });
  };

  const isDisabled = () => {
    return (
      question === "" ||
      options.a === "" ||
      options.b === "" ||
      options.c === "" ||
      options.d === ""
    );
  };

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <h3 style={{ marginBottom: 5 }}>What is your question ?</h3>
      <input
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        name="question"
        type="text"
        className="input"
      />
      <h3>What are the options</h3>
      <label htmlFor="input" className="label">
        A
      </label>
      <input
        value={options.a}
        onChange={handleChange}
        name="a"
        type="text"
        className="input"
      />
      <label htmlFor="input" className="label">
        B
      </label>
      <input
        value={options.b}
        onChange={handleChange}
        name="b"
        type="text"
        className="input"
      />
      <label htmlFor="input" className="label">
        C
      </label>
      <input
        value={options.c}
        onChange={handleChange}
        name="c"
        type="text"
        className="input"
      />
      <label htmlFor="input" className="label">
        D
      </label>
      <input
        value={options.d}
        onChange={handleChange}
        name="d"
        type="text"
        className="input"
      />

      <button className="btn" disabled={isDisabled()}>
        Submit
      </button>
    </form>
  );
};
