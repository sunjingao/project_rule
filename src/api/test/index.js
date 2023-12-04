
import {basePath} from '@/api/config.js';
import request from '@/utils/CommRequest.js';

export function postData(params) {
  return request({
    url: `${basePath}/getTestApi`,
    method: 'post',
    data: params
  });
}

export function getData(params) {
  return request({
    url: `${basePath}/postTestApi`,
    method: 'get',
    params: params
  });
}
