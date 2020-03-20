# clientql

> Generate strongly typed, flexible & fast client SDK from any GraphQL API

## Installation

This project is in alpha stage. You can clone & build it locally.

## Overview

- **Strongly Typed**

  - _Client typings_ - replaces `graphql-code-generator` or `apollo-cli` for most cases
  - _Configurable_ - many common codegen options and custom APIs for complete control

- **Flexible**

  - _Enviroment agnostic_ - browser / node / react native (as long as it supports ES6 proxies)
  - _Framework agnostic_ - created with react in mind, but can be used with any frontend or server-side framework
  - _Client agnostic_ - with tiny adapter function any graphql client will work

- **Fast**

  - _Lightweight_ - client-side ships with absolutely no dependencies (`graphql` recommended as devDep for typings)
  - _Efficient lazy runtime_ - queries & fragments are generated efficiently (max few ms) at runtime (to avoid shipping and evaluating graphql strings) with additional fragment and query level caching (to shave another miliseconds of huge queries)

- **And also...**

  - _Modular_ - most packages provide generic, reusable functionality
  - _Multi-build_ - ESM / CJS

## TODO

https://github.com/vadistic/clientql/projects/1
