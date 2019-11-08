# mkmake

A simple CLI to create a Makefile in the current directory

## how it works

![demo](https://user-images.githubusercontent.com/4562878/68478472-3b039e00-0230-11ea-9370-611770c122b8.gif)

> the typo on "created" has been fixed 😅

at the moment is only allow to set two commands, `run` and `dev`, dev should be the "watch mode" such as nodemon version of `run` which is only run once

## how to install

`npm i -g mkmake`

## hot to run

`mkmake`
follow instructions

`make run`
`make dev`

### running without global install

use `npx mkmake`

> running `make` will execute the `run` command by default (first in order)
