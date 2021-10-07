const Notificationreducer = (state = null, action) => {
  switch (action.type) {
    case "ADD_VOTE_NOTI":
      state = action.data;
      return state;
    case "ADD_ANECDO":
      state = action.data;
      return state;
    case "HIDE_NOTIFCATION":
      return (state = null);
    default:
      return state;
  }
};

export const votedNotification = (message, time) => {
  return async (dispatch) => {
    dispatch({ type: "ADD_ANECDO", data: message });
    setTimeout(() => {
      dispatch(hideNotification());
    }, time * 1000);
  };
};

export const hideNotification = () => {
  return { type: "HIDE_NOTIFCATION" };
};

export const addNotification = (message, time) => {
  return async (dispatch) => {
    dispatch({ type: "ADD_ANECDO", data: message });
    setTimeout(() => {
      dispatch(hideNotification());
    }, time * 1000);
  };
};

export default Notificationreducer;
