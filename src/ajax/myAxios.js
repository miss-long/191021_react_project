import axios from 'axios'
import qs from 'querystring'
import {message} from 'antd';

axios.defaults.baseURL = 'http://localhost:3000'

//请求拦截器
axios.interceptors.request.use((config)=>{
	let {method,data} = config
	if(method.toLowerCase() === 'post' && data instanceof Object){
		config.data = qs.stringify(data)
	}
	return config
})

//响应拦截器
axios.interceptors.response.use(
	response => {return response.data},
	err => {
		//1.服务器没给响应 2.服务器返回的状态码不是2开头
		message.error(err.message)
		return new Promise(()=>{})
	}
)

export default axios
