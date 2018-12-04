import load from './load';

const loadDotEnvConfig = (rootDir: string): void => {
	if (process.env.DISABLE_DOTENV_CONFIG === 'true') { // eslint-disable-line no-process-env
		return;
	}

	if (typeof jest === 'undefined') {
		load({
			path: `${rootDir}/.env`,
			sample: `${rootDir}/.env.example`,
		});
	} else { // running tests
		load({
			path: `${rootDir}/.env.example`,
			sample: `${rootDir}/.env.example`,
		});
	}
};

export default loadDotEnvConfig;
