import { memo, useEffect } from 'react';

const ChatMessage = ({ name, message }) => {

	// useEffect(() => {
	// 	const timer = setInterval(() => {
	// 		// console.log("API")
	// 	}, 2000)

	// 	return () => clearInterval(timer)
	// }, [])

	return (
		<div className='flex items-center shadow-sm p-2'>
			<img className='h-8' src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="user" />
			<span className='font-bold px-2'>{name}</span>
			<span>{message}</span>
		</div>
	);
};

export default memo(ChatMessage);