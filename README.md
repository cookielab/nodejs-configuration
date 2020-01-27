# Overview

This package is meant to help you work with environment variables safely. It is wrapper around [doenv-safe](https://www.npmjs.com/package/dotenv-safe) package.

You have to call `loadDotEnvConfig()` function to make sure all ENV variables are loaded.

You can ensure their presence in environment by using `variable()` function to load all ENV variables values. You can also set their default value if not present.

## Installation

```sh
$ npm install --save @cookielab.io/configuration
```

or

```sh
$ yarn add @cookielab.io/configuration
```

## Usage

```js
import {loadDotEnvConfig, variable} from '@cookielab.io/configuration';

// assuming .env file in the project root and the config file in ./src/config
loadDotEnvConfig(`${__dirname}/../../`);

export default {
    environment: variable('ENVIRONMENT'),
    https: variable('HTTPS') === 'enabled',
    port: parseInt(variable('PORT', '3000'), 10),
};
```

## Api

### `variable(name: string, defaultValue?: string): string`

Throws an error if the variable is not set and does not have default value.

### `load(options: Object): void`

Wrapper around `require('dotenv-safe').config`. [Available options](https://www.npmjs.com/package/dotenv-safe#options).

### `loadDotEnvConfig(rootDir: string): void`

Wrapper around `load()`.  It forces loading of `.env.example` file to be used as ENV variables source when jest is present.

It also checks `DISABLE_DOTENV_CONFIG` ENV variable to be `true` not to use and require `.env` files at all (for production environment usage).
