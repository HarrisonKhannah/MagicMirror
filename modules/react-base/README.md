# React MagicMirror^2 Module

A small demo of a module written in React.

![Demo](https://github.com/jack-michaud/magicmirror2-react-module/raw/master/docs/demo.gif)

## Features

- 🔥 Hot Module Reloading (HMR)
- 🗲 JSX rendering with Babel and Webpack
- 🧲 Get the vanilla MM module's `this` in a context for easy access to the module configuration
- ⚓ Standalone mode (build your plugin for release without worrying about running webpack dev server)

## Why?

Instead of re-writing [MagicMirror^2](https://github.com/MichMich/MagicMirror) in React,
it made more sense to me to hook into the existing module system and write a react module.

# Forking for development

```bash
# Navigate to the magic mirror directory
cd /path/to/magicmirror/

# Go into modules and clone this repo
cd modules
git clone https://github.com/jack-michaud/magicmirror2-react-module.git
mv magicmirror2-react-module whateveryoulike

```

```javascript
// config/config.js

var config = {
  // ...
  modules: [
    // ...
    {
      module: "whateveryoulike",
      position: "bottom_bar"
    }
    // ...
  ]
};
```

Start the magic mirror. _Make sure that navigating to `http://localhost:8000`
shows the mirror UI._

Then, from another terminal, start running the webpack development server for
the module.

```bash
cd /path/to/module
yarn install
yarn dev
```

This should open the MagicMirror UI in your browser, served from the webpack dev
server.

Making changes to the component file should show up immediately.

# Building

Be sure to read the previous section for setup instructions.

Outside of development, you can build the component and it will
load directly from the electron app without the need for the dev server.

```
yarn build
```

This creates a javascript file named after the module's folder name. Once
you've done this, the module is standalone.

# Getting the module context

If you need to access the module's configuration or other info, you can easily do so with the
provided context!

```javascript
import React, { useContext } from "react";
import ModuleContext from "./contexts/module";

/*
 * Shows the name of the module proudly!
 */
const ModuleNameDisplay = () => {
  const module = useContext(ModuleContext);
  return <div>{module.name}</div>;
};

/*
 * Shows a special property of the module!
 * e.g. if our module config looks something like this:
 * {
 *   module: 'modulename',
 *   position: 'bottom_bar',
 *   config: {
 *     text: 'Hello!'
 *   }
 * }
 */
const ModuleTextDisplay = () => {
  const module = useContext(ModuleContext);
  return <div>{module.config.text}</div>;
};
```
