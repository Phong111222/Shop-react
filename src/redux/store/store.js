import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "../reducer/reducer";
import { logger } from "../middleware/logger";

const store = configureStore({
  reducer: reducer,
  middleware: [...getDefaultMiddleware()],
});

export default store;
