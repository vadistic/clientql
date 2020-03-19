# clientql

> Generate strongly typed, flexible & fast client SDK from any GraphQL API

## Installation

This project is in alpha stage. You can clone & build it locally.

## Overview

- **Strongly Typed**

  - _Client typings_ - can replace `graphql-code-generator` or `apollo-cli` formsot cases
  - _Configurable_ - supports common codegen options and expose transformer APIs for complete customisation

- **Flexible**

  - _Enviroment agnostic_ - browser / node / react native (as long as it supports ES6 proxies)
  - _Framework agnostic_ - created with react in mind, but can be used with any frontend or server-side framework
  - _Client agnostic_ - with tiny adapter function any graphql client will work

- **Fast**

  - _Lightweight_ - Client ships with absolutely no dependencies. Uses `graphql` package only for typs (can be devDep)
  - _Efficient lazy runtime_ - Queries & fragments are generated efficiently (max few miliseconds) at runtime (to avoid shipping and evaluating graphql strings) with additional fragment and query level caching (to shave another miliseconds of huge queries)

- **And also...**

  - _Modular_ - project packages provide generic, reusable functionality
  - _Mulit-build_ - ESM / CJS

## TODO

- finish `@clientql/client`
- improve error handling
- finish/improve fragment caching
- use extrenal fluent-async-proxy
- add support for Observables
- document
