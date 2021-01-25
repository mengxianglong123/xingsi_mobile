// 封装request/axios请求
import axios from 'axios'

// 创建单例
const instance = axios.create({
    baseURL: 'http://101.201.125.229:8081',
    timeout: 5000
})

// 响应拦截
instance.interceptors.response.use(res=>{
    return res.data; //直接将数据返回
}, err=>{
    return Promise.reject(err)
})

export default instance;
