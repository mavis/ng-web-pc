import {api} from './api'
import axios from 'axios'
function setMetaTitle (title) {
    document.title = title
    let mobile = navigator.userAgent.toLowerCase()
    if (/iphone|ipad|ipod/.test(mobile)) {
      let iframe = document.createElement('iframe')
      iframe.style.visibility = 'hidden'
      // 替换成站标favicon路径或者任意存在的较小的图片即可
      // iframe.setAttribute('src', '')
      let iframeCallback = function () {
        setTimeout(function () {
          iframe.removeEventListener('load', iframeCallback)
          document.body.removeChild(iframe)
        }, 0)
      }
      iframe.addEventListener('load', iframeCallback)
      document.body.appendChild(iframe)
    }
  }
  function getCookie(name)
  {
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
      return unescape(arr[2]);
    else
      return null;
  }
  function getuserInfo(){
    let token = window.localStorage.getItem('access_token');
    return axios({
      method: "get",
      url:api.getUserInfo,
      headers:{
        'Authorization':token
      }
    }).then(res => {
      if(res.data.username !=''){
        window.localStorage.setItem('userType',res.data.roles[0]);
      }
    })
  }
  export {
    setMetaTitle,
    getCookie,
    getuserInfo
  }