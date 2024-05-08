import { createSlice } from '@reduxjs/toolkit'
import { getLanguages } from './tableFilters.thunk'

const initialState = { 
  loading: false,
  availableLanguages: [
    {
      id: 999,
      name: 'All',
    },
  ],
  selectedLanguage: 'all',
  lastReview: '',
  errorText: '',
}

const tableFiltersSlice = createSlice({
  name: 'tableFilters',
  initialState,
  reducers: {
    updateSelectedLanguage: (state, action) => {
      state.selectedLanguage = action.payload
    },
    updateLastReview: (state, action) => {
      state.lastReview = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getLanguages.pending, (state, action) => {
      state.loading = true
    });
    builder.addCase(getLanguages.fulfilled, (state, action) => {
      state.availableLanguages = [{
        id: 999,
        name: 'ALL'
      },
    ...action.payload,
    ],
    state.loading = false
    });
    builder.addCase(getLanguages.rejected, (state, action) => {
      console.log(action.payload)
      state.errorText = action.payload
      state.loading = false
    });
  },
});

export const {
  updateSelectedLanguage,
  updateLastReview
} = tableFiltersSlice.actions

export const {
  availableLanguages
} = tableFiltersSlice.selectors

export default tableFiltersSlice.reducer