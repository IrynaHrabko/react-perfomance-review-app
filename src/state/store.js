import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import tableFilters from '../state/tableFilters/tableFilters.slice'


const store = configureStore({
  reducer: {
    tableFilters
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    createLogger({
      collapsed: true,
    })
  )
});

export default store;
