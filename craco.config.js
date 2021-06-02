const path = require("path");
const CracoAlias = require("craco-alias");

module.exports = {
    webpack: {
        alias: {
            '@components': path.resolve(__dirname, "src/components/"),
            '@utils': path.resolve(__dirname, "src/utils/"),
            '@shared': path.resolve(__dirname, "src/shared/"),
            '@icons': path.resolve(__dirname, "src/icons/"),
            '@redux': path.resolve(__dirname, "src/redux/"),
        }
    },
    plugins: {
        plugin: CracoAlias,
        options: {
            source: "tsconfig",
            tsConfigPath: "./tsconfig.paths.json",
            baseUrl: "./",
            debug: false,
        },
    },
}