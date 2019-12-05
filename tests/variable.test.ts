import variable from '../src/variable';

const existingVariable = 'TEST_VARIABLE';
const emptyString = 'TEST_EMPTY_STRING';
const emptyVariable = 'TEST_EMPTY_VARIABLE';

describe('environment variable', () => {
	beforeEach(() => {
		process.env[existingVariable] = '42'; // eslint-disable-line no-process-env
		process.env[emptyString] = ''; // eslint-disable-line no-process-env
	});
	afterEach(() => {
		delete process.env.TEST_VARIABLE; // eslint-disable-line no-process-env
	});

	it('returns a non-empty variable', () => {
		const result = variable(existingVariable);
		expect(result).toBe('42');
	});

	it('returns an empty string for an empty optional variable', () => {
		const result = variable(emptyVariable, '');
		expect(result).toBe('');
	});

	it('returns an empty string for an empty string variable', () => {
		const result = variable(emptyString);
		expect(result).toBe('');
	});

	it('throws an error for an empty required variable', () => {
		expect(() => {
			variable(emptyVariable);
		}).toThrow(`Required environment variable "${emptyVariable}" not set.`);
	});
});
