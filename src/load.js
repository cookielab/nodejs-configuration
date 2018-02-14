// @flow

import * as dotenv from 'dotenv-safe';

export type Options = {
    allowEmptyValues?: boolean,
    sample?: string,
};

const load = (options?: Options = {}): void => {
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
