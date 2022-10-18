import { useState } from 'react';
import { HStack, VStack, Button } from '@chakra-ui/react';

export default function Keyboard({ disabledKeys }) {
	const letters = [
		['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
		['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
		['z', 'x', 'c', 'v', 'b', 'n', 'm']
	];

	return (
		<VStack mt={20}>
			{letters.map((row, index) => (
				<HStack key={index}>
					{row.map(letter => (
						<Button key={letter} size='xs' disabled={disabledKeys.includes(letter)}>{letter.toUpperCase()}</Button>
					))}
				</HStack>
			))}
		</VStack>
	);
}