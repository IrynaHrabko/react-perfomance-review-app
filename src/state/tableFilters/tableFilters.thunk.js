import { collection, getDocs, getFirestore, query } from 'firebase/firestore';
import { app } from '../../firebase.js';
import { createAsyncThunk } from '@reduxjs/toolkit'

export const getLanguages = createAsyncThunk(
  'tableFilters/getLanguages',
  async (_, {getState}) => {
    const db = getFirestore(app);
    if (getState().tableFilters.availableLanguages.length <= 1) {
      return getDocs(query(collection(db, 'languages')))
        .then((q) => {
          let temp = [];
          q.forEach((item) => {
            temp.push(item.data());
          });
          return temp;
        })
        .then((res) => res)
        .catch((e) => alert(e));
    }
  },
);