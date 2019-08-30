import load from '../src/load';

describe('loader', () => {
	it('loads dotenv file', () => {
		const result = load({
			path: `${__dirname}/.env.example`,
			example: `${__dirname}/.env.example`,
		});

		expect(result).toBeUndefined();
	});
});
