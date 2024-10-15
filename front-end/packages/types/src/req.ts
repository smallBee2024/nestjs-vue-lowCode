// 统一管理接口返回数据类型
export interface Res<T = any> {
  code: number;
  message: string;
  data: T;
  success: boolean;
  [key: string]: any;
}