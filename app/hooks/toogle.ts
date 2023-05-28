import { Dispatch, SetStateAction, useState } from 'react';

export function useToggle(defaultValue = false) {
	const [value, setValue] = useState(!defaultValue);

	const toggle = (value?: boolean) => setValue((x) => value ?? !x);

	return [value, toggle] as const;
}

