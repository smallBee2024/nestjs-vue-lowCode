import { type Res } from '@common/types';
import request from './request';

const base = 'https://www.fastmock.site/mock/2529bde1048f63ab5e865df013c7f6e6/api'

export interface LoginState {
  name: string;
  password: string;
}

export interface RegisterState extends LoginState {
  repeatpass: string
}

// 创建或修改空白应用，appModifyDTO 包含id 为修改， 不包含ID为创建
export function applyList(params) {
  return request.get(`${base}/platform/app/info`, params) || {}
}

// 登录
export function login(params: LoginState): Promise<Res<any>> {
  return request.post(`/api/signin`, params) || {}
}

// 注册
export function register(params: RegisterState): Promise<Res<any>> {
  return request.post(`/api/signup`, params) || {}
}