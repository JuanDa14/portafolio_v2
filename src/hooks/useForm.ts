import { ChangeEvent, useState } from 'react';
import { sendEmail } from '../helpers';

export const useForm = <T>(initialState: T) => {
	const [values, setValues] = useState<T>(initialState);
	const [loading, setLoading] = useState(false);

	const reset = () => {
		setValues(initialState);
	};

	const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setValues({ ...values, [target.name]: target.value });
	};

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		setLoading(true);
		await sendEmail(values);
		setLoading(false);

		reset();
	};

	return { values, handleInputChange, reset, loading, onSubmit };
};
