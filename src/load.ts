import * as dotenv from 'dotenv-safe';

const load = (options: dotenv.DotenvSafeOptions = {}): void => {
    const defaultOptions = {
        allowEmptyValues: true,
    };

    dotenv.load(Object.assign(
        {},
        defaultOptions,
        options
    ));
};

export default load;
