const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path'); //node에서 제공하는 모듈 만들어준 현재경로

module.exports = {
    mode: 'development', //개발용인가 프로덕션용인가
    devtool: 'eval', //개발시만 사용 빌드가 빠르다
    resolve: {
        extensions:['.js', '.vue'], //확장자 처리 import 부분 확장자 제거 가능
    },
    entry: {
        app: path.join(__dirname, 'main.js') //스크립트 통합 js, app.js로 합쳐짐
    },
    module: { //webpack의 핵심이다.
        rules: [{
            test: /\.vue$/, //파일명이 .vue로 끝나는 파일
            loader: 'vue-loader',
        }],
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    output: {
        filename: 'app.js', // entry에서 통합한 js, [name].js로 하면 entry에 입력한 이름으로 파일명 생성
        path: path.join(__dirname, 'dist'), //현재경로의 dist 폴더를 찾아라
    },
};