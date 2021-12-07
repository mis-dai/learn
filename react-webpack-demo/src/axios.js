import axios from 'axios'
axios.defaults.timeout = 6000;
/**
 * http request 拦截器
 */
axios.interceptors.request.use ((config) => {
    config.data = JSON.stringify(config.data);
    config.headers = {
        "Content-Type": "application/json",
        'Authorization': 'Bearer'+'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4MDI1MyIsImxvZ2luVHMiOjQ4NDAzNjY1NzM0NzkzOTczfQ.JTlYnu69_4J6ReP8ahaLy4sSyw4TRfJHpvsqMQLr1JY'
      };
    return config
}, err => {
    return Promise.reject(err);
})
/**
 * http response 拦截
 */
 
axios.interceptors.response.use(
 (res) => {
   if (res.data.errCode === 2) {
     console.log("过期");
   }
   return res;
 },
 (error) => {
   console.log("请求出错：", error);
 }
)

export const post = ( url , data) => {
    return new Promise((resolve, reject) => {
        axios.post(url, data).then(res => {
            resolve(res);
        },err => {
            reject(err);
        })
    })
}

export const get = ( url , data = {}) => {
    return new Promise((resolve, reject) => {
        axios.get(url, data).then(res => {
            resolve(res.data);
        },err => {
            reject(err);
        })
    })
}
