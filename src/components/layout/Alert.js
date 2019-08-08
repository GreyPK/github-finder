import React, { useContext } from 'react'
import AlertContext from '../../context/alert/alertContext'
import { ReactComponent as AlertIcon } from '@fortawesome/fontawesome-free/svgs/solid/info-circle.svg'

const Alert = () => {
	const { alert } = useContext(AlertContext)

	return (
		alert !== null && (
			<div className={`alert alert-${alert.type}`}>
				<AlertIcon fill="#333" width="18px" style={{ paddingRight: '5px' }} />
				{alert.msg}
			</div>
		)
	)
}

export default Alert
