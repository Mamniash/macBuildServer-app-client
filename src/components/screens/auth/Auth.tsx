import React from 'react'

import Loader from '../../ui/Loader'
import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'

import Layout from '../../layout/Layout'

import styles from './Auth.module.scss'
import { useAuthPage } from './useAuthPage'
import Alert from '../../ui/alert/Alert'

const Auth = () => {
	const { setType, register, handleSubmit, errors, error, mutation } =
		useAuthPage()

	return (
		<>
			<Layout heading='authentication' bgImage='/images/auth.jpg' />
			<div className={'wrapper-inner-page'}>
				{mutation.isPending && <Loader />}
				<form onSubmit={handleSubmit(data => mutation.mutate(data))}>
					<Field
						error={errors?.email?.message}
						name='email'
						register={register}
						type='text'
						placeholder='Enter email'
					/>

					<Field
						error={errors?.password?.message}
						name='password'
						register={register}
						type='password'
						placeholder='Enter password'
						style={{ marginTop: '15px' }}
					/>

					<div className={styles.wrapperButtons}>
						<Button clickHandler={() => setType('login')}>Sign in</Button>
						<Button clickHandler={() => setType('register')} type='accent'>
							Sign up
						</Button>
					</div>
				</form>
				{error && <Alert type='error' text={error} />}
				{mutation.isSuccess && !error && <Alert text={'Success'} />}
				{mutation.isPending && <Loader />}
			</div>
		</>
	)
}

export default Auth
