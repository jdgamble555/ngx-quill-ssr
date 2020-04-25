const NormalModuleReplacementPlugin = require('webpack/lib/NormalModuleReplacementPlugin');
const path = require("path");

module.exports = {
    plugins: [
        new NormalModuleReplacementPlugin(/^quill$/, path.join(__dirname, './src/app/mocks/quill.mock.server.ts'))
    ]
};