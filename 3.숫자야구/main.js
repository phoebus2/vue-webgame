import Vue from 'vue';
import NumberBaseball from "./NumberBaseball"; //webpack.config 의 resolve.extention 부분 추가하면 확장자 제거가능

new Vue(NumberBaseball).$mount('#root');
