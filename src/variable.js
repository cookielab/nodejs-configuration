// @flow

const variable = (name: string, defaultValue?: string): string => {
    const envValue = process.env[name];
    const value = envValue != null ? envValue : defaultValue;

    if (value == null) {
        throw new Error(`Required environment variable "${name}" not set.`);
    }

    return value;
};

export default variable;
