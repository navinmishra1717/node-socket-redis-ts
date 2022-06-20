# node-ts

complete package with node, typescript, jobs, socket, design-patterns, redis

# API

## Prerequisite

- nodejs 15 >=
- Yarn (Installed globally)

## Getting started

### Install

```
git clone repository
yarn install
```

### Run

Build the project

```
 yarn build
```

Run the project for production

```
 npm run dev
```

OR

```
 yarn dev
```

### Code Formattting

We are using Eslint to find coding errors and code formatting. Install ESlint extension on your editor.
Run linter before you commit changes.

```
yarn lint
```

## Debugging in VS Code with Nodemon

In order to attach debugger when we run `yarn dev`, add following json inside `.vscode/launch.json`

```
{
    "type": "node",
    "request": "attach",
    "name": "Node: Nodemon",
    "processId": "${command:PickProcess}",
    "restart": true,
    "protocol": "inspector",
}
```

https://github.com/microsoft/vscode-recipes/tree/main/nodemon#debugging-the-node-process
