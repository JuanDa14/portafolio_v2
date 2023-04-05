import { Fragment, useContext } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { UIContext } from '../../context';
import { MyImage } from './Image';

export default function MyModal() {
	const { isOpen, closeModal } = useContext(UIContext);

	return (
		<>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as='div' className='relative z-10' onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
					>
						<div className='fixed inset-0 bg-black bg-opacity-25' />
					</Transition.Child>

					<div className='fixed inset-0 overflow-y-auto'>
						<div className='flex min-h-full items-center justify-center p-4 text-center'>
							<Transition.Child
								as={Fragment}
								enter='ease-out duration-300'
								enterFrom='opacity-0 scale-95'
								enterTo='opacity-100 scale-100'
								leave='ease-in duration-200'
								leaveFrom='opacity-100 scale-100'
								leaveTo='opacity-0 scale-95'
							>
								<Dialog.Panel className='w-full p-6 max-w-md transform overflow-hidden rounded-2xl bg-gray-100 text-left align-middle shadow-xl transition-all'>
									<MyImage
										src64=''
									style={{
											width: '100%',
											height: '100%',
											objectFit: 'cover',
											objectPosition: 'center',
										}}
										src='https://res.cloudinary.com/dbvyaguam/image/upload/v1670816638/calendarApp_iragok.png'
									/>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
}
