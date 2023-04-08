import axios, { AxiosError } from 'axios';
import { toast } from 'react-toastify';

type ServerError = { errors: { message: string; field: string }[] };

export const sendEmail = async <T>(values: T) => {
	try {
		// const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/contact`, values);

		// toast.success(data.message);
		toast.success('Mensaje enviado correctamente.');
	} catch (error) {
		if (axios.isAxiosError(error)) {
			const serverError = error as AxiosError<ServerError>;
			if (serverError && serverError.response) {
				toast.error(serverError.response.data.errors[0].message);
			}
		} else {
			toast.error('Hubo un problema, intente mas tarde.');
		}
	}
};
