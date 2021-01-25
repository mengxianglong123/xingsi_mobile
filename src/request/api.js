import request from './request'
import Axios from 'axios';

// 按需导出api

// 获取新闻列表数据
export const GetNews = (params) => request.get('/news',{params}); //花括号是为了解构

// 获取相册列表数据
export const GetPic = (params) => request.get('/album',{params}); //花括号是为了解构



// 商品删除
export const DelGood = (params) => request.post('/cart/delete', params);


