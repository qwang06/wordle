import { useState } from 'react';
import { Input } from '@chakra-ui/react';

export default function WordleInput({ onInput, onSubmit, disabled, bg }) {
	const [value, setValue] = useState('');
	const handleChange = (e) => {
		if ((e.target.value.match(/[a-zA-Z]/) || e.target.value === '') && e.target.value.length < 2) {
			setValue(e.target.value);
			if (e.target.value === '') {
				onInput(e.target.value);
				if (e.target.previousElementSibling) {
					e.target.previousElementSibling.focus();
				}
			} else {
				onInput(e.target.value);
				if (e.target.nextElementSibling) {
					e.target.nextElementSibling.focus();
				}
			}
		}
	}
	const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			onSubmit();
		}
	}

	return (
		<Input
			bg={bg}
			px={5}
			size='lg'
			onKeyPress={handleKeyPress}
			onChange={handleChange}
			value={value}
			disabled={disabled}
		/>
	);
}