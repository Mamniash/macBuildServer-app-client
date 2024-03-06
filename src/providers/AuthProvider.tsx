import Cookies from 'js-cookie'
import React, { FC, createContext } from 'react'
import { useState } from 'react'
import { TOKEN } from '../app.constants'

interface ProviderProps {
	children: React.ReactNode
}

export const AuthContext = createContext({
	isAuth: false,
	setIsAuth: (auth: boolean): void => {}
})

const AuthProvider: FC<ProviderProps> = ({ children }) => {
	const [isAuth, setIsAuth] = useState(!!Cookies.get(TOKEN))

	return (
		<AuthContext.Provider value={{ isAuth, setIsAuth }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
