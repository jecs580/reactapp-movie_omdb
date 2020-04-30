htmlWebpackPlugin = require('html-webpack-plugin');
const htmlPlugin = new htmlWebpackPlugin({
    template: './src/index.html',
    filename: './index.html'
});
module.exports ={
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test:/.css$/,
                use:['style-loader','css-loader']  // Esta regla se ejecutara de derecha a izquierda
                // Con css-loader convertimos css a codigo de js
                // Con style-loader cargara el codigo convertido en nuestro proyecto
            }
        ]
    },
    plugins:[htmlPlugin]
};