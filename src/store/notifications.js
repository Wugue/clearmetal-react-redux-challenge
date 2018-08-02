export default function notifications(state = [], action) {
  const { payload, type } = action;

  switch (type) {
    case "ADD_NOTIFICATION":
      return [payload];

    case "REMOVE_NOTIFICATION":
      return state.filter(notification => false);

    default:
      return state;
  }
}
