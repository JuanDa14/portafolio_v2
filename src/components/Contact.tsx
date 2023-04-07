import { Fade } from 'react-awesome-reveal';
import { useForm } from '../hooks';
import { InitialStateContactForm } from '../data';
import { Lottie } from './ui';

export const Contact = () => {
	const { handleInputChange, values, loading, onSubmit } = useForm(InitialStateContactForm);

	return (
		<Fade triggerOnce className='py-10 text-black mb-4'>
			<section className='px-5 md:px-3 max-w-3xl mx-auto' id='contacto'>
				<h2 className='text-step-1 uppercase  font-bold mb-4 border-b-2 border-gray-500 py-5'>
					Contacto 📩
				</h2>
				<div className='text-step--1'>
					<div>
						<p className='mb-4 flex items-center gap-2'>
							<span className='font-semibold'>
								¿Tienes un proyecto que quieras discutir?
							</span>{' '}
							¡No dudes en contactarme!
						</p>
						<p className='mb-4 text-gray-700'>
							Estoy disponible para proyectos freelance. Si tienes alguna pregunta o
							solicitud, no dudes en enviarme un correo electrónico.
						</p>
						<p className='mb-4'>¡Espero poder ayudarte con tu proyecto!</p>
					</div>
					<div className='flex items-center justify-center'>
						<form className='flex-1 text-step--1 relative' onSubmit={onSubmit}>
							<input
								autoCorrect='off'
								required
								name='name'
								value={values.name}
								onChange={handleInputChange}
								type='text'
								placeholder='Nombre'
								className='border outline-none border-pallete-light-gray rounded-md w-full p-2 mb-4 placeholder:text-sm placeholder:text-pallete-light-gray hover:border-pallete-gray transition-all duration-300 ease-in-out'
							/>
							<input
								autoCorrect='off'
								required
								name='email'
								value={values.email}
								onChange={handleInputChange}
								type='text'
								className='border outline-none border-pallete-light-gray rounded-md w-full p-2 mb-4 placeholder:text-sm placeholder:text-pallete-light-gray hover:border-pallete-gray transition-all duration-300 ease-in-out'
								placeholder='Correo electrónico'
							/>
							<input
								autoCorrect='off'
								required
								name='subject'
								value={values.subject}
								onChange={handleInputChange}
								type='text'
								placeholder='Asunto'
								className='border outline-none border-pallete-light-gray rounded-md w-full p-2 mb-4 placeholder:text-sm placeholder:text-pallete-light-gray hover:border-pallete-gray transition-all duration-300 ease-in-out'
							/>
							<textarea
								autoCorrect='off'
								required
								name='message'
								value={values.message}
								onChange={handleInputChange}
								rows={5}
								placeholder='Mensaje'
								className='border outline-none resize-none border-pallete-light-gray rounded-md w-full p-2 mb-4 placeholder:text-sm placeholder:text-pallete-light-gray hover:border-pallete-gray transition-all duration-300 ease-in-out'
							></textarea>
							<button
								disabled={loading}
								type='submit'
								className='absolute -bottom-8 left-0 font-semibold px-5 py-2 rounded-md border bg-black text-white hover:text-black hover:bg-white hover:border-black transition-all duration-300 ease-in-out'
							>
								{loading ? 'Enviando...' : 'Enviar'}
							</button>
						</form>
						<div>
							<Lottie
								className='hidden sm:flex w-full h-full max-w-sm'
								autoplay
								loop
								src='/lottie/contact.json'
							/>
						</div>
					</div>
				</div>
			</section>
		</Fade>
	);
};
