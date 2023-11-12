import axios from 'axios';
import router from '../router';

// 請求攔截
axios.interceptors.request.use((config:any) => {
    // 攜帶token
    if(localStorage.token){
        config.headers.Authorization = localStorage.token
    }

    return config;
},(error) => {
    return Promise.reject(error)
})

// 回應攔截
axios.interceptors.response.use(response => {
    return response;
},(error) => {
    const {status} = error.response

    if(status === 401){
        localStorage.removeItem("token")

        router.push("/login")
    }
    return Promise.reject(error)
})

export default axios;