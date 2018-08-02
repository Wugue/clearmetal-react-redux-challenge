
function createNotification(options) {
  return {
    ...options
  }
}

export function addNotification(options = {}) {
  return {
    payload: createNotification(options),
    type: "ADD_NOTIFICATION"
  };
}

export function removeNotification() {
  return {
    type: "REMOVE_NOTIFICATION"
  };
}