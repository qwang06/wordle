import { Container, Heading } from '@chakra-ui/react';
import { useState } from 'react';
import WordleInputGroup from '../components/WordleInputGroup';
import Keyboard from '../components/Keyboard';

export default function HomePage() {
	const [disabledKeys, setDisabledKeys] = useState([]);
	const [disabledWordleInputGroup, setDisabledWordleInputGroup] = useState([false, true, true, true, true]);
	let word = 'horse';

	const handleSubmit = (index) => {
		return (disableKeys) => {
			setDisabledKeys([...disabledKeys, ...disableKeys]);
			const newDisabledGroup = [...disabledWordleInputGroup];
			newDisabledGroup[index] = true;
			if (index+1 < disabledWordleInputGroup.length) {
				newDisabledGroup[index+1] = false;
			}
			console.log(newDisabledGroup);
			setDisabledWordleInputGroup(newDisabledGroup);
		}
	}
	console.log(disabledWordleInputGroup);

	return (
		<Container mt={5} maxW='container.lg'>
			<Heading mb={5}>Wordle</Heading>
			<WordleInputGroup word={word} onSubmit={handleSubmit(0)} disabledGroup={disabledWordleInputGroup[0]} />
			<WordleInputGroup word={word} onSubmit={handleSubmit(1)} disabledGroup={disabledWordleInputGroup[1]} />
			<WordleInputGroup word={word} onSubmit={handleSubmit(2)} disabledGroup={disabledWordleInputGroup[2]} />
			<WordleInputGroup word={word} onSubmit={handleSubmit(3)} disabledGroup={disabledWordleInputGroup[3]} />
			<WordleInputGroup word={word} onSubmit={handleSubmit(4)} disabledGroup={disabledWordleInputGroup[4]} />
			<Keyboard disabledKeys={disabledKeys} />
		</Container>
	);
}