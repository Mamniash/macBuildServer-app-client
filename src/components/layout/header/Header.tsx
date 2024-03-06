import { IoMdArrowBack } from 'react-icons/io'
import React from 'react'

import Hamburger from '../hamburger/Hamburger'

import styles from './Header.module.scss'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'

const Header = ({ backLink = '/' }) => {
	const { pathname } = useLocation()
	const navigate = useNavigate()

	const { isAuth } = useAuth()

	return (
		<header className={styles.header}>
			{isAuth && (
				<>
					{pathname == '/' ? (
						<span></span> //Todo fix this shit
					) : (
						<button
							aria-label='Go back'
							onClick={() => {
								navigate(backLink)
							}}
						>
							<IoMdArrowBack fill='#fff' fontSize={35} />
						</button>
					)}
					<Hamburger />
				</>
			)}
		</header>
	)
}

export default Header
