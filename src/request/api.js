import request from './request'
import Axios from 'axios';

// 按需导出api

// 获取新闻列表数据
export const GetNews = (params) => request.get('/news',{params}); //花括号是为了解构

// 获取相册列表数据
export const GetPic = (params) => request.get('/album',{params}); //花括号是为了解构

// 获取单条新闻数据
export const GetNewsById = (id) => request.get(`/news/detail/${id}`)

// 获取单个相册信息
export const GetPicById = (id) => request.get(`/album/${id}`)

// 获取导航信息
export const GetNav = () => request.get("/navi")

// 获取行思历史信息
export const GetHis = () => request.get("/history")

// 获取行思历史详细信息
export const GetHisDetail = (id) => request.get(`/history/${id}`)

// 商品删除(接口示例)
export const DelGood = (params) => request.post('/cart/delete', params);


