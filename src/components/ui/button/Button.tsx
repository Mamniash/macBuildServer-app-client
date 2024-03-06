import React, { MouseEventHandler } from 'react'
import styles from './Button.module.scss'
import cn from 'clsx'

interface ButtonProps {
	children?: React.ReactNode
	clickHandler?: MouseEventHandler<HTMLButtonElement>
	size?: string
	type?: string
}

const Button: React.FC<ButtonProps> = ({
	children,
	clickHandler,
	size = 'xl',
	type = 'common',
	...rest
}) => {
	return (
		<div className={styles.wrapper}>
			<button
				className={cn(styles.button, styles[size], styles[type])}
				onClick={clickHandler}
				{...rest}
			>
				{children}
			</button>
		</div>
	)
}

export default Button
