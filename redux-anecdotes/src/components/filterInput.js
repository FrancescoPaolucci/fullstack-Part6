import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filtering } from "../reducers/filteReducer";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filtereducer);
  const handleChange = (event) => {
    dispatch(filtering(event.target.value));
    // input-field value is in variable event.target.value
  };
  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
      <p>{filter}</p>
    </div>
  );
};

export default Filter;
