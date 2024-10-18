import { type Res } from '@common/types';
import request from './request';

// const base = 'https://www.fastmock.site/mock/2529bde1048f63ab5e865df013c7f6e6/api'

export interface LoginState {
  name: string;
  password: string;
}

export interface RegisterState extends LoginState {
  repeatpass: string
}

export function applyList(): Promise<Res<any>> {
  return request.get(`/api/apply`) || {}
}

// 登录
export function login(params: LoginState): Promise<Res<any>> {
  return request.post(`/api/auth/login`, params) || {}
}

// 注册
export function register(params: RegisterState): Promise<Res<any>> {
  return request.post(`/api/auth/register`, params) || {}
}