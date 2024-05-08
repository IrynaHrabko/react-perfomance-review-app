import React from 'react';
import { useSelector } from 'react-redux';
import AuthProvider from './AuthProvider';

const AppHeader = ({ user }) => {
  let selectedLanguage = useSelector(
    (state) => state.tableFilters.selectedLanguage
  );

  return (
    <>
      <header className='bg-brand-main p-2'>

      {!user && <AuthProvider />}
      <h1 className={'font-playfair-display text-2xl font-bold text-main-strong'}>

        {user && `Привіт, ${user.displayName}`}
      </h1>
      
      {user && user.photoURL && (
        <img src={user.photoURL} alt={user.displayName} width='50' height='50' />
      )}
      {user && user.email && (
        <p>{user.email}</p>
      )}


      <div className='text-right'>Current selected language: {selectedLanguage}</div>
    </header>
    </>
  );
};

export default AppHeader;
