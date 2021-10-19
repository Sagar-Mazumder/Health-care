import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory, useLocation } from "react-router";
import initializeAuthentication from "../firebase/firebase.init";
initializeAuthentication();

const useFirebase = () => {

      const location = useLocation();
      const history = useHistory();
      const redirect_uri = location.state?.from || '/home'
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState('');
      const [loading, setLoading] = useState(true);
      const [user, setUser] = useState({});
      const googleprovider = new GoogleAuthProvider();
      const auth = getAuth();
      const signInGoogle = () => {
            return signInWithPopup(auth, googleprovider)
                  .finally(() => { setLoading(false) });
      }
      const handleNameChange = e => {
            setName(e.target.value);
      }
      const handleEmailChange = e => {
            setEmail(e.target.value);
      }

      const handlePasswordChange = e => {
            setPassword(e.target.value);
      }
      const handleRegistration = e => {
            e.preventDefault();
            if (password.length < 6) {
                  setError('Password Must be at least 6 characters long.')
                  return;
            }
            if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
                  setError('Password Must contain 2 upper case');
                  return;
            }
            createUserWithEmailAndPassword(auth, email, password)
                  .then(result => {
                        setError('');
                        verifyEmail();
                        setUserName();
                  })
                  .catch(error => {
                        setError(error.message);
                  })
      }
      const setUserName = () => {
            updateProfile(auth.currentUser, { displayName: name })
                  .then(result => { })
      }

      const verifyEmail = () => {
            sendEmailVerification(auth.currentUser)
                  .then(result => {
                        console.log(result);
                  })
      }

      const handleLogin = e => {
            e.preventDefault();
            signInWithEmailAndPassword(auth, email, password)
                  .then(result => {
                        const user = result.user;
                        if (!user.emailVerified) {
                              setError('email is not verified');
                              return
                        }

                        history.push(redirect_uri);
                        setError('');
                  })
                  .catch(error => {
                        setError(error.message);
                  })
      }

      const logout = () => {
            setLoading(true);
            signOut(auth)
                  .then(() => {
                        setUser({})
                  })
                  .finally(() => setLoading(false))
      }

      useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                  if (user) {
                        setUser(user);
                  }
                  else {
                        setUser({});
                  }
                  setLoading(false);
            });
            return () => unsubscribe;
      }, [])

      return {
            user,
            loading,
            handleNameChange,
            handleEmailChange,
            handlePasswordChange,
            handleRegistration,
            handleLogin,
            error,
            signInGoogle,
            logout
      }
}

export default useFirebase;