import React, { FC } from 'react'
import styles from './Field.module.scss'
import { UseFormRegister } from 'react-hook-form'

type Data = {
	email: string
	password: string
}

interface FieldProps {
	register: UseFormRegister<Data>
	name: 'email' | 'password'
	error: any
	placeholder: string
	type: string
	style?: React.CSSProperties
}

const Field: FC<FieldProps> = ({ register, name, error, ...rest }) => {
	return (
		<div>
			<input {...register(name)} {...rest} className={styles.input} />
			{error && <div className={styles.error}>{error}</div>}
		</div>
	)
}

export default Field
