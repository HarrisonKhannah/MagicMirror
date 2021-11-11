![MagicMirror²: The open source modular smart mirror platform. ](.github/header.png)

Prework:
Make sure you have `electron` installed globally by running
`sudo npm install -g electron --unsafe-perm=true --allow-root`
If you cannot access your root-system `node_modules` run follow: `https://stackoverflow.com/questions/48910876/error-eacces-permission-denied-access-usr-local-lib-node-modules`

Make sure you have `npm` and `yarn` installed!

NPM: `https://docs.npmjs.com/downloading-and-installing-node-js-and-npm`
Yarn: `npm install --global yarn`

To start the system:

1. `npm i` at root level
2. `npm run server` at this level.
3. Paste your `env` into `modules/family-sim`
   In a new terminal window:
4. `yarn` at `modules/family-sim` level
5. `yarn start` at `modules/family-sim` level

In the event you want to run the VideoCall system locally on your network, please update the node server in `modules/family-sim/server/index` to listen to your IP, update `modules/family-sim/src/video-chat/VideoChat.js` to point to your local IP address, and finally `modules/family-sim/webpacl.config.js` and add the line under the `devServer` object: `host: "[local-ip]"`

PS: To find your network IP address, use `ifconfig` in your terminal and take the `inet` address!

</p>
