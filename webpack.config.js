const path = require("path");

module.exports = {
    entry: "./src/typescript/main.ts", // Seu arquivo TypeScript de entrada
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js" // Nome do arquivo de saída
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/, // Identifica arquivos TypeScript e TypeScript React
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader", // Use o Babel para transpilar TypeScript
                },
            },
            {
                test: /\.(ts|tsx)$/, // Identifica  rquivos TypeScript e TypeScript React
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader", // Use o ts-loader para transpilar TypeScript
                },
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"] // Adicione extensões de arquivo TypeScript para resolução
    }
};
