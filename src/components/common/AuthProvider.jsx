import { useState } from 'react';
import { getAuth, signInWithPopup, signOut } from 'firebase/auth';
import { app } from '/src/firebase';
import { GithubAuthProvider } from "firebase/auth";
import { GoogleAuthProvider } from 'firebase/auth';

const provider = new GithubAuthProvider();




const AuthProvider = () => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);

  const startLoginWithGoogle = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((creds) => 
      {console.log(creds)
        setUser(creds.user)}
      )
      .catch((error) => alert(error.message));
  };
  

  const startLoginWithGithub = async () => {
    const githubAuthProvider = new GithubAuthProvider();
    signInWithPopup(auth, githubAuthProvider)
      .then((result) => {
        const githubUser = result.user;
        setUser(githubUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const logOut = () => {
    signOut(auth).then(() => {
      window.location.href = '/';
    });
  };

  return user != null ? (
    <>
      <div className=' flex flex-col justify-start text-brand-strong'>
        <img src={user.photoURL} alt={user.displayName} width='100' height='100' />
        <div>
          <p>
          {user.displayName}
          </p>
          <p>
            {user.email}
          </p>
        </div>
      </div>


      <button
        className='mb-2 me-2 inline-flex items-center rounded-lg bg-brand-accent px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-brand-secondary focus:outline-none focus:ring focus:ring-brand-secondary active:opacity-65'
        onClick={() => logOut()}
      >
        Logout
      </button>
    </>
  ) : (
    <>
      <button
        onClick={() => startLoginWithGoogle()}
        type='button'
        className='mb-2 me-2 inline-flex items-center rounded-lg bg-brand-accent px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-brand-secondary focus:outline-none focus:ring focus:ring-brand-secondary active:opacity-65'
      >
        <svg
          className='me-2 h-4 w-4'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
          viewBox='0 0 18 19'
        >
          <path
            fillRule='evenodd'
            d='M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z'
            clipRule='evenodd'
          />
        </svg>
        Sign in with Google
      </button>
      <button
        onClick={() => startLoginWithGithub()}
        type='button'
        className='mb-2 me-2 inline-flex items-center rounded-lg bg-brand-accent px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-brand-secondary focus:outline-none focus:ring focus:ring-brand-secondary active:opacity-65'
      >
        <svg 
        className='me-2 h-4 w-4'
        aria-hidden='true'
        xmlns="http://www.w3.org/2000/svg"
        fill='currentColor'
        viewBox="0 0 24 24"
        >
          <path 
            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            />
          </svg>
        Sign in with Github
      </button>
    </>
  );
  
};


export default AuthProvider;
