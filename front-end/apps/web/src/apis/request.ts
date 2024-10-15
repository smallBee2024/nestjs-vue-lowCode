
import axios,{ AxiosError }  from 'axios'
// import { HTTP_CODE } from '@ec/enum'
import { message } from 'ant-design-vue';
// import { getStore } from '@ec/utils'
// import { useLoginOut } from '@ec/hooks';
const request = axios.create({
  timeout: 100000,
  baseURL: (import.meta as any).env.VITE_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})
request.interceptors.request.use(
  (config: any) => {
    const token = localStorage.getItem('token');
    if (!token) return config;
    // 检查更新token
    config.headers['authorization'] = `Bearer ${token}`;
    return config;
  },
  (err: any) => Promise.reject(err)
)
request.interceptors.response.use(response => {
  const { data, config: { responseType } } = response
  if (data.success) {
    return data
  }
  if (responseType === 'blob') {
    return data
  }
  message.destroy()
  message.error(data.errMessage || '服务器开小差啦，请稍后再试')
  return Promise.reject(data.errMessage);
},
  (error: AxiosError) => {
    console.log(error)
    if (error.response) {
      message.destroy()
      // message.error((error.response.data as any).errMessage! || HTTP_CODE[error.response.status] || '服务器开小差啦，请稍后再试')
      if (error.response.status === 401) {
        // useLoginOut()
      }
      return Promise.reject(error)
    }
    message.destroy()
    message.error('请求超时, 请刷新重试')
    return Promise.reject(new Error('请求超时, 请刷新重试'))
  }
)
export default request;