//在main.js设置全局的请求次数，请求的间隙
axios.defaults.retry = 4;
axios.defaults.retryDelay = 1000;

axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
  var config = err.config;
  // If config does not exist or the retry option is not set, reject
  if (!config || !config.retry) return Promise.reject(err);

  // Set the variable for keeping track of the retry count
  config.__retryCount = config.__retryCount || 0;

  // Check if we've maxed out the total number of retries
  if (config.__retryCount >= config.retry) {
    // Reject with the error
    return Promise.reject(err);
  }

  // Increase the retry count
  config.__retryCount += 1;

  // Create new promise to handle exponential backoff
  var backoff = new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, config.retryDelay || 1);
  });

  // Return the promise in which recalls axios to retry the request
  return backoff.then(function () {
    return axios(config);
  });
});

//   上面是 retry 的功能的代码， 考虑在做 axios 二次封装的时候把 retry 功能叠加进去

import axiosRetry from 'axios-retry';

//配置axios
axiosRetry(axios, { 
  retries: 1,  //设置自动发送请求次数
  retryDelay: (retryCount) => {        
      return retryCount * 1000;
  },
  shouldResetTimeout:true,
  retryCondition: (error)=>{        
      //true为打开自动发送请求，false为关闭自动发送请求
      //这里的意思是当请求方式为get时打开自动发送请求功能
      return (error.config.method === 'get' || error.config.method === 'post');
  }
});


// 考虑并发请求的处理
// 封装 all 函数

// Promise.all([p1, p2]).then(function(values) {
//   console.log(values);//values为一个数组
//   ///进行你的下一步操作
//  });
