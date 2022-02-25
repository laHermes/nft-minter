import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Switch } from '@headlessui/react';
import { BiWalletAlt } from 'react-icons/bi';

const Board = () => {
	const [enabled, setEnabled] = useState(false);

	return (
		<div className='w-screen max-w-screen-md mx-auto '>
			<div className='w-full bg-white/50 rounded-xl'>
				<div className='flex flex-row border-b border-white/40 px-3 py-2'>
					<Switch
						checked={enabled}
						onChange={setEnabled}
						className={`${
							enabled ? 'bg-blue-600' : 'bg-gray-200'
						} relative inline-flex items-center h-6 rounded-full w-11 text-indigo-900`}>
						<span className='sr-only'>Enable notifications</span>
						<span
							className={`${
								enabled ? 'translate-x-6' : 'translate-x-1'
							} inline-block w-4 h-4 transform bg-white rounded-full`}
						/>
					</Switch>
				</div>
				<div className='h-96 w-full flex flex-col gap-3 justify-start p-20'>
					<BiWalletAlt className='self-center text-5xl text-white/70' />
					<p className='self-center text-xl text-white/70'>
						Please connect you wallet!
					</p>
				</div>
			</div>
		</div>
	);
};

export default Board;
