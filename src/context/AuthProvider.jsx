/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react'
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
	GoogleAuthProvider,
	signInWithPopup,
} from 'firebase/auth'
import auth from '../services/firebase.config'


export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider()


const AuthProvider = ({ children }) => {

	const [user, setUser] = useState(null)
	const [loading, setLoading] = useState(true)

	const createUser = (email, password) => {
		setLoading(true)
		return createUserWithEmailAndPassword(auth, email, password)
	}

	const logInUser = (email, password) => {
		setLoading(true)
		return signInWithEmailAndPassword(auth, email, password)
	}

	const signInWithGoogle = () => {
		setLoading(true)
		return signInWithPopup(auth, googleProvider)
	}

	const logOutUser = () => {
		setLoading(true)
		return signOut(auth)
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, currentUser => {
			setUser(currentUser)
			setLoading(false)
		})
		return () => {
			unsubscribe()
		}
	}, [])

	const authInfo = {
		user,
		loading,
		createUser,
		logInUser,
		logOutUser,
		signInWithGoogle,
	}

	return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
	)
}

export default AuthProvider
