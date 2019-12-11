import axios from 'axios'
import { Message } from "element-ui"
import code from "./code"
import url from '@utils/url'
import Vue from 'vue'
let conf = {
  baseURL: url.API_DEVELOP,
  headers: {
  }
}
axios.defaults.withCredentials = true

class Api {
  constructor(params) {
    this.rebuild();
  }
  rebuild() {
    let obj = {},
      factory;
    Object.assign(obj, conf)
    obj.transformResponse = [(r) => {
      let data = JSON.parse(r);
      return data
    }]
    factory = axios.create(obj);
    factory.interceptors.request.use(async function (config) {
      return config;
    }, function (error) {
      return Promise.resolve(err);
    })
    factory.interceptors.response.use(function (response) {
      if (response.data.code !== code.SUCCESS && response.data.code !== code.SUCCESS_NULL) {
        let dom = document.querySelectorAll(".el-loading-mask")
        if(dom){
          for (var i = 0; i < dom.length; i++) {
            dom[i].style.display = 'none'
          }
        }
        
        Message({
          message: response.data.msg,
          type: 'warning'
        });
      }
      return response.data;
    }, function (err) {
      Message({
        message: err,
        type: 'warning'
      });
      return Promise.resolve(err);
    })
    Object.assign(this, factory)
  }

}
let api = new Api()

export {
  api
}