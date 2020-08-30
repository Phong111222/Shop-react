export const logger = (store) => (next) => (action) => {
  console.log("- State:", store.getState());
  console.log("- Next:", next);
  console.log("- Action:", action);
};
