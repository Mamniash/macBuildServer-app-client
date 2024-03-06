import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'
import { useEffect, useState } from 'react'
import { useForm, Resolver } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import AuthService from '../../../services/auth.service'

export const useAuthPage = () => {
	const [type, setType] = useState('register')
	const navigate = useNavigate()
	const { isAuth, setIsAuth } = useAuth()
	const [error, setError] = useState('')

	type Data = {
		email: string
		password: string
	}

	const resolver: Resolver<Data> = async values => {
		return {
			values: values.email && values.password ? values : {},
			mode: 'onChange',
			errors: !values.email
				? {
						email: {
							type: 'required',
							message: 'Email is required.'
						}
					}
				: !values.password
					? {
							password: {
								type: 'required',
								message: 'Password is required.'
							}
						}
					: {}
		}
	}

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<Data>({
		resolver
	})

	useEffect(() => {
		if (isAuth) navigate('/')
	}, [isAuth])

	const mutation = useMutation<Data, Error, Data>({
		mutationKey: ['auth/login user'],
		mutationFn: async ({ email, password }) => {
			console.log(`${email} ${password} ${type}`)
			try {
				return await AuthService.main(email, password, type)
			} catch (error) {
				if (error instanceof Error) {
					console.log(error)
					setError(error.message)
					throw new Error(error.message)
				} else {
					throw new Error('unknown error')
				}
			}
		},
		onSuccess: () => {
			reset()
			setTimeout(() => {
				setIsAuth(true) //TODO fix this shit
			}, 1000)
		}
	})

	return {
		setType,
		register,
		handleSubmit,
		errors,
		error,
		mutation
	} //TODO useMemo add to it
}
