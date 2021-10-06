const Notificationreducer = (state = null, action) => {
  switch (action.type) {
    case "ADD_VOTE_NOTI":
      state = `You voted! ${action.data.content}`;
      return state;
    case "ADD_ANECDO":
      state = "A new anecdote was added correctly";
      return state;
    case "HIDE_NOTIFCATION":
      return (state = null);
    default:
      return state;
  }
};

export const votedNotification = (content) => {
  return {
    type: "ADD_VOTE_NOTI",
    data: { content },
  };
};

export const hideNotification = () => {
  return { type: "HIDE_NOTIFCATION" };
};

export const addNotification = () => {
  return { type: "ADD_ANECDO" };
};

export default Notificationreducer;
