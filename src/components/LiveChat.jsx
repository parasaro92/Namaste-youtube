import { memo, useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helpers';

const LiveChat = () => {
	const chatMessages = useSelector(store => store.chat.messages)
	const [liveMessage, setLiveMessage] = useState("")
	const dispatch = useDispatch()

	useEffect(() => {
		const timer = setInterval(() => {
			dispatch(addMessage({
				name: generateRandomName(),
				message: makeRandomMessage(20)
			}))
			console.log("API")
		}, 2000)

		return () => clearInterval(timer)
	}, [])

	return (
		<>
			<div className='w-full h-150 ml-2 p-2 border border-black rounded-lg bg-slate-100 overflow-y-scroll flex flex-col-reverse'>
				<div>
					{chatMessages.map((c, i) => (
						<ChatMessage key={i} name={c.name} message={c.message} />
					))}
				</div>
			</div>
			<form className='w-full p-2 ml-2 border border-black flex' onSubmit={(e) => {
				e.preventDefault()
				if (liveMessage) {
					dispatch(addMessage({
						name: 'Goku',
						message: liveMessage
					}))
					setLiveMessage("")
				}
			}}>
				<input className='w-70 px-2 border border-black' type="text" value={liveMessage} onChange={(e) => setLiveMessage(e.target.value)} />
				<button className='px-2 mx-2 bg-amber-500 cursor-pointer'>Submit</button>
			</form>
		</>
	);
};

export default memo(LiveChat);