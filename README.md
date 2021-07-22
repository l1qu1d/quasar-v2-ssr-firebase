# Welcome

This repo is to help you get setup to host your Quasar V2 SSR ExpressJS project on Google's Firebase! You can fork, download, or follow the steps below to get instantly setup. The files in this repo are the **exact steps shown below.**

# *Warning*
**You WILL HAVE TO EDIT `.firebaserc` TO YOUR FIREBASE PROJECT NAME!**
* [.firebaserc](your-project-folder/firebase/.firebaserc)

# TLDR;
The quick and dirty is that `module.exports` in the [ssr/index.js](your-project-folder/firebase/functions/ssr/index.js) file is blocking `exports.handler` for some reason. I've tried all sorts of different ways to make it work and this was the only solution that worked for me. As future versions come out, **this may change so be warned**, *this could be out of date*.

You will have to edit the compressed code that is generated from `quasar build -m ssr`, mainly the [ssr/index.js](your-project-folder/firebase/functions/ssr/index.js) file. Unfortunally we have to edit this file because we couldn't do it via the `middlewares` folder in `src-ssr` in our Quasar project (e.g. the files that were created when you `quasar m add ssr`. The middlewares file `render.js` has **replaced** `index.js` in Quasar v1. Read about [Quasar SSR Upgrade Guide](https://next.quasar.dev/quasar-cli/developing-ssr/ssr-upgrade-guide#the-src-ssr-folder).

## TLDR; Steps
1. Remove `module.exports = n` from [ssr/index.js](your-project-folder/firebase/functions/ssr/index.js) because it blocks us from exporting our handler function!
1. Then we can add our handler function, `exports.handler = m`, in the **IIFE (Immediately invoked function expression) where they had to "use strict"**.
2. **NOTE: Your variable names my be different because of the compression. For example, your `exports.handler = m` might be something like `exports.handler = h` instead.**
3. The end of your `index.js` file should look something like this:
* [index.js](your-project-folder/firebase/functions/ssr/index.js)

```javascript
    m.use(f("/"), q(".")),
      ((P = {
        app: m,
        resolve: {
          urlPath: f,
          root() {
            return (0, e.join)(h, ...arguments);
          },
          public: b,
        },
        publicPath: "/",
        folders: { root: h, public: g },
        render: (e) => y(e, d()),
        serve: { static: q },
      }),
      Promise.all([
        Promise.resolve().then(t.bind(t, 660)),
        Promise.resolve().then(t.bind(t, 100)),
      ]).then(async (e) => {
        const r = e.map((e) => e.default);
        for (let e = 0; e < r.length; e++)
          try {
            await r[e](P);
          } catch (e) {
            return void console.error("[Quasar SSR] middleware error:", e);
          }
      }));
    exports.handler = m;
  })();
})();
```

# Technologies

- [Quasar V2](https://quasar.dev/)
  - [ExpressJS](https://expressjs.com/) When building with SSR Quasar uses ExpressJS
- [Firebase](https://firebase.google.com/)
  - [Firebase functions](https://firebase.google.com/docs/functions)
  - [Firebase hosting](https://firebase.google.com/docs/hosting)


# Setup

## Folder Structure

1. your-project-folder
2. your-project-folder/firebase
3. your-project-folder/quasar

## Firebase commands

### Firebase Functions

**In command prompt or your favorite terminal.**

1. `cd your-project-folder/firebase`
1. `npm install firebase-functions@latest firebase-admin@latest --save`
1. `npm install -g firebase-tools`
1. `firebase init functions`
1. Are you ready to proceed? (Y/n) `Y`
1. Please select an option: (Use arrow keys)
   - Use an existing project
     - I will be selecting this one and if you don't have an existing one create a new one.
   - Create a new project
   - Add Firebase to an existing Google Cloud Platform project
   - Don't set up a default project
1. Select a default Firebase project for this directory: (Use arrow keys)
   - example-project
1. What language would you like to use to write Cloud Functions? (Use arrow keys)
   - JavaScript
   - Typescript
     - For me I prefer typescript
1. Do you want to use ESLint to catch probable bugs and enforce style? (Y/n)
   - Up to you but I prefer to use ESLint `Y`
1. Do you want to install dependencies with npm now? (Y/n) `Y`

### Firebase Hosting

**In command prompt or your favorite terminal.**

1. `cd your-project-folder/firebase`
1. `firebase init hosting`
1. Are you ready to proceed? (Y/n) `Y`
1. What do you want to use as your public directory? (public)
   - Name it whatever you want but since we're going to be hosting out of our `functions/ssr/www` it won't matter. Just hit enter.
1. Configure as a single-page app (rewrite all urls to /index.html)? (y/N) `Y`
   - This step is **VERY IMPORTANT** that you choose `Y`. We need this to rewrite to our SSR function later on.
1. Set up automatic builds and deploys with GitHub? (y/N) `N`

## Quasar

**In command prompt or your favorite terminal.**

1. `cd your-project-name`
1. `quasar create quasar`
1. Project name (internal usage for dev) (quasar) `Name it whatever you want. I'm going with default.`
1. Project product name (must start with letter if building mobile apps) (Quasar App) `Name it whatever you want. I'm going with default.`
1. Project description (A Quasar Framework app) `Name it whatever you want. I'm going with default.`
1. Author (Your Name <your@email.com)
1. Pick your CSS preprocessor: (Use arrow keys) `Whatever you want. I choose Sass with SCSS syntax.`
1. Check the features needed for your project: `Choose the techologies you need. I choose ESLint and Typescript.`
1. Pick a component style: (Use arrow keys) `Your choice. I use Composition API.`
1. Pick an ESLint preset: (Use arrow keys) `Your choice. I use Prettier.`
1. Continue to install project dependencies after the project has been created? (recommended) (Use arrow keys) `Choose whatever package manager you use. I use NPM.`
1. `cd your-project-name/quasar`
1. `quasar m add ssr`

### Build our Quasar project
1. `quasar build -m ssr`

### Copy our Quasar SSR files to Firebase
1. Copy the folder `your-project-folder/quasar/dist/ssr` to `your-project-folder/firebase/functions` folder.

## Add dependencies from Quasar SSR to Firebase functions
1. Open `your-project-folder/firebase/functions/ssr/package.json`
   * [ssr/package.json](your-project-folder/firebase/functions/ssr/package.json)
2. Copy everything in "dependencies".

Example:
 "dependencies": {
 ```
    "core-js": "3.15.2",
    "quasar": "2.0.3",
    "compression": "^1.0.0",
    "express": "^4.0.0",
    "vue": "3.1.5",
    "@vue/server-renderer": "3.1.5",
    "@vue/compiler-sfc": "3.1.5",
    "@quasar/ssr-helpers": "2.1.1",
    "vue-router": "4.0.10",
    "@quasar/babel-preset-app": "2.0.1"
```
},
  
3. Paste the copied dependencies to `your-project-folder/firebase/functions/package.json`
   * [functions/package.json](your-project-folder/firebase/functions/package.json)

Example:
"dependencies": {
```
    "core-js": "3.15.2",
    "quasar": "2.0.3",
    "compression": "^1.0.0",
    "express": "^4.0.0",
    "vue": "3.1.5",
    "@vue/server-renderer": "3.1.5",
    "@vue/compiler-sfc": "3.1.5",
    "@quasar/ssr-helpers": "2.1.1",
    "vue-router": "4.0.10",
    "@quasar/babel-preset-app": "2.0.1",
    "firebase-admin": "^9.8.0",
    "firebase-functions": "^3.14.1"
 ```
},

## Install the added dependencies
1. `cd your-project-folder/firebase/functions`
2. `npm i` or run install on whatever package manager you have.

# Code

For editing the code I use [Visual Studio Code](https://code.visualstudio.com/)

## ESLint
1. In `your-project-folder/firebase/functions/.eslintrc.js` in `ignorePatterns` add `"/ssr"` or it will try to lint the compressed ssr/index.js file.
   * [.eslintrc.js](your-project-folder/firebase/functions/.eslintrc.js)
### Optional
1. In `your-project-folder/firebase/functions/.eslintrc.js` comment or remove `"google"` in `extends`. In my opnion it's overly strict and creates more annoyances than maintainability.
   * [.eslintrc.js](your-project-folder/firebase/functions/.eslintrc.js)

## Firebase
### firebase.json
1. Open `your-project-folder/firebase/firebase.json`
   * [firebase.json](your-project-folder/firebase/firebase.json)
2. We need to change our public location to `"public": "functions/ssr/www"`
3. We need to change our rewrite **from** destination to `"function": "ssr"`

### src/index.ts
This file is where you can add all of your Firebase functions. I recommened creating your functions in a different file and importing them into this file. Then you can export each one, for example: 
```typescript
import sendMail = require("./sendMail");
exports.sendEmail = functions.https.onCall(async (data) => {
  const returnMsg = await sendMail.send(data);
  return returnMsg;
});
```
---------------------------------------------------------------------------
1. Open `your-project-folder/firebase/functions/src/index.ts`.
   * [index.ts](your-project-folder/firebase/functions/src/index.ts)
2. We'll bring in our `/ssr/index.js` file.
3. Then we'll have our handler function become a Firebase CloudFunction via `exports.ssr`.

Here's what your `index.ts` file should look like.

```typescript
import * as functions from "firebase-functions";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ssrApp = require("../ssr/index.js");

exports.ssr = functions.https.onRequest(ssrApp.handler);
```

### ssr/index.js
This is the compressed code that is generated from Quasar SSR. Unfortunally we have to edit this file because we couldn't do it via the `middlewares` folder in `src-ssr` in our Quasar project. The middlewares file `render.js` has **replaced** `index.js` in Quasar v1.

1. Since this file is compressed we have to make it human readable(ish). If you've been following along and use prettier you can auto-format it via VS Code. If not, you can copy and paste it in an online [prettier formatter](https://prettier.io/playground/). 
2. After **a LOT of playing around and testing** we **have to remove `module.exports = n`** because it blocks us from exporting our handler function!
3. Then we can add our handler function in the `IIFE (Immediately invoked function expression) where they had to "use strict"`. `exports.handler = m`.

The end of your `index.js` file should look something like this:
* [index.js](your-project-folder/firebase/functions/ssr/index.js)

```javascript
    m.use(f("/"), q(".")),
      ((P = {
        app: m,
        resolve: {
          urlPath: f,
          root() {
            return (0, e.join)(h, ...arguments);
          },
          public: b,
        },
        publicPath: "/",
        folders: { root: h, public: g },
        render: (e) => y(e, d()),
        serve: { static: q },
      }),
      Promise.all([
        Promise.resolve().then(t.bind(t, 660)),
        Promise.resolve().then(t.bind(t, 100)),
      ]).then(async (e) => {
        const r = e.map((e) => e.default);
        for (let e = 0; e < r.length; e++)
          try {
            await r[e](P);
          } catch (e) {
            return void console.error("[Quasar SSR] middleware error:", e);
          }
      }));
    exports.handler = m;
  })();
})();
```

5. **Note: If you're follwing along via the instructions only, your variable names my be different because of the compression. For example, your `exports.handler = m` might be something like `exports.handler = h` instead.**
6. Remove the listener.
```javascript
.then(() => {
  const e = process.env.PORT || 3e3;
  m.listen(e, () => {
    console.log("Server listening at port " + e);
  });
});
```

### .firebaserc
1. **If you downloaded the project you will have to change line 3 to your project name.**

# Testing
In command prompt or your favorite terminal.

1. `cd your-project-folder/firebase/functions`
1. `npm run build` this step is only necessary if you're using typescript.
2. `firebase serve` this runs a local server for you to test with.
3. In your web browser navigate to `localhost:5000` and if all goes well, you should see your project running on simulated firebase hosting!

# Deploy
In command prompt or your favorite terminal.

1. `cd your-project-folder/firebase/functions`
2. `firebase deploy`
3. **Congratulations!!! You've successfully deployed to Firebase using Quasar v2 SSR with ExpressJS!**
