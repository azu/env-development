# env-development [![Build Status](https://travis-ci.org/azu/env-development.svg?branch=master)](https://travis-ci.org/azu/env-development)

Set $NODE_ENV to "development".

Works best with `mocha --require env-development`.

## Why?

Because to force environment, I was used to add `process.env.NODE_ENV = "development"` at the beginning of every file.

Because relying on `Makefile` or `package.json` to set this environment is almost always OK, but when one user just throws `mocha` in his terminal we don't want to punish him with data loss or any other hell.

Whereas relying on `mocha.opts` makes it easy (no more ugly line in each test file) and reliable (always loaded).

## Install

Install with [npm](https://www.npmjs.com/):

    npm install env-development

## Usage

### With mocha

- Install with `npm install --save-dev env-development`
- Edit `test/mocha.opts` and add the line `--requir env-development`


## Related

- [byteclubfr/node-env-test: Set $NODE_ENV to "test" works best with mocha --require=env-test](https://github.com/byteclubfr/node-env-test "byteclubfr/node-env-test: Set $NODE_ENV to &#34;test&#34; works best with mocha --require=env-test")

## Changelog

See [Releases page](https://github.com/azu/env-development/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm i -d && npm test

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/azu/env-development/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- [github/azu](https://github.com/azu)
- [twitter/azu_re](https://twitter.com/azu_re)

## License

MIT © azu
