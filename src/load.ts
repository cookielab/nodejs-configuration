import * as dotenv from 'dotenv-safe';

const load = (options: dotenv.DotenvSafeOptions = {}): void => {
	const defaultOptions = {
		allowEmptyValues: true,
	};

	dotenv.config(Object.assign(
		{},
		defaultOptions,
		options
	));
};

export default load;
