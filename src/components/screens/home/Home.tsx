import React from 'react'

import Layout from '../../layout/Layout'
import { useNavigate } from 'react-router-dom'
import styles from './Home.module.scss'

function Home() {
	const navigate = useNavigate()
	return (
		<>
			<Layout />
		</>
	)
}

export default Home
