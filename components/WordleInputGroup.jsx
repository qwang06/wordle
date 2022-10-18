import { useState } from 'react';
import WordleInput from './WordleInput';
import { HStack } from '@chakra-ui/react';

export default function WordleInputGroup({ word, onSubmit, disabledGroup }) {
	const [value, setValue] = useState([]);
	const [disabled, setDisabled] = useState(false);
	const [bg, setBg] = useState([]);

	const handleInput = (index) => {
		return (e) => {
			value[index] = e;
			setValue(value);
		}
	}

	const handleSubmit = () => {
		const guess = value.join('');
		const disableKeys = [];
		if (guess.length === 5) {
			setDisabled(true);
			for (let i = 0; i < guess.length; i++) {
				if (guess[i] === word[i]) {
					bg[i] = 'green';
				} else if (word.includes(guess[i])) {
					bg[i] = 'teal';
				} else {
					disableKeys.push(guess[i]);
				}
			}
			setBg(bg);
			onSubmit(disableKeys);
		}
	}

	return (
		<HStack mt={10} mx={40}>
			<WordleInput onInput={handleInput(0)} onSubmit={handleSubmit} disabled={disabledGroup || disabled} bg={bg[0]} />
			<WordleInput onInput={handleInput(1)} onSubmit={handleSubmit} disabled={disabledGroup || disabled} bg={bg[1]} />
			<WordleInput onInput={handleInput(2)} onSubmit={handleSubmit} disabled={disabledGroup || disabled} bg={bg[2]} />
			<WordleInput onInput={handleInput(3)} onSubmit={handleSubmit} disabled={disabledGroup || disabled} bg={bg[3]} />
			<WordleInput onInput={handleInput(4)} onSubmit={handleSubmit} disabled={disabledGroup || disabled} bg={bg[4]} />
		</HStack>
	);
}