import React from "react";
import { connect } from "react-redux";
//import { useDispatch, useSelector } from "react-redux";
import { filtering } from "../reducers/filteReducer";

const Filter = (props) => {
  // const dispatch = useDispatch();
  //const filter = useSelector((state) => state.filtereducer);
  const handleChange = (event) => {
    props.filtering(event.target.value);
    // input-field value is in variable event.target.value
  };
  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
      <p>{props.filter}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { filter: state.filtereducer };
};
const mapDispatchToprops = {
  filtering,
};

export default connect(mapStateToProps, mapDispatchToprops)(Filter);
