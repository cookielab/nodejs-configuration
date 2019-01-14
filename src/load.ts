import * as dotenv from 'dotenv-safe';

export type Options = {
    path?: string,
    example?: string,
    sample?: string,
    silent?: boolean,
    encoding?: string,
    allowEmptyValues?: boolean,
};

const load = (options: Options = {}): void => {
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
