# Configuration

## Installation

```sh
$ yarn add @cookielab.io/configuration
```

## Usage

```js
import {load, variable} from '@cookielab.io/configuration';

// This variable needs to be set to 'true' in production
// All the env variables are set by the deploy script
// And this is used only in development
if (process.env.DISABLE_DOTENV_CONFIG !== 'true') {
    load({
        allowEmptyValues: true,
    });
}

export default {
    environment: variable('ENVIRONMENT'),
    https: variable('HTTPS') === 'enabled',
};
```

## Api

### `variable(name: string, required?: boolean = true): string`

Throws an error if the variable is required and not set.

### `load(options: Object): void`

Wrapper around `require('dotenv-safe').load`. [Available options](https://www.npmjs.com/package/dotenv-safe#options).
