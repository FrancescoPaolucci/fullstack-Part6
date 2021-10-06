const Filtereducer = (state = "", action) => {
  switch (action.type) {
    case "FILTERING":
      return (state = action.data.event.toLowerCase());

    default:
      return state;
  }
};

export const filtering = (event) => {
  return { type: "FILTERING", data: { event } };
};
export default Filtereducer;
