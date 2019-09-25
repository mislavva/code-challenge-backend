# code-challenge

## Description
Challenge is written in `typescript`, with `mocha` and `chai` for testing, and `express-validator` for `req.body` validation.
I have separated given challenge into two components: `authorization`, and `encoder`. Each component has its corresponding folder with files (modules) separated by concerns:

- `handlers` -- define route handlers
- `router` -- register route handlers and required middleware
- `service` -- do all business logic
- `validators` -- define request validation middleware
- `test` -- unit test of a specific components feature

Main goal was to reduce file sizes, increase readability and modularity, reduce dependencies per module. With this design we can unit test a specific component feature, reuse code with zero or few changes, add new funcionalities and refactor more easily.

## Notes
- Removed `body-parser` as a project dependency since it is a part of express library as of `v4.16.0.`
