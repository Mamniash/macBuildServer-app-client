import React from 'react'

import cn from 'clsx'
import styles from './Hamburger.module.scss'
import { useLogOut } from '../../../hooks/useLogOut'

const Menu = ({ isShow, setIsShow }) => {
	const logoutHandler = useLogOut()
	return (
		<nav
			className={cn(styles.menu, {
				[styles.show]: isShow
			})}
		>
			<button
				onClick={() => {
					if (confirm('Log out?')) logoutHandler()
				}}
			>
				Log out
			</button>
		</nav>
	)
}

export default Menu
