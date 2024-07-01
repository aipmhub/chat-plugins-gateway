const config = require('@aipmorg/lint').eslint;

config.rules['no-extra-boolean-cast'] = 0;
config.rules['unicorn/no-array-for-each'] = 0;

module.exports = config;
