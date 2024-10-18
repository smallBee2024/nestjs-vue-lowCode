// 返回体构造函数，默认结构：code,msg,data,success
export const ResultFactory = ({
  code = 200,
  msg = 'success',
  data = null,
  success = true,
}: {
  code: number;
  msg: string;
  data: any;
  success: boolean;
}) => {
  return {
    code,
    msg,
    data,
    success,
  };
};
