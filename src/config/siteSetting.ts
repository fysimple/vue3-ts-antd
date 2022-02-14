// 网址设置
const CONTEXT = "test";

// 配置ip和图片请求地址
const GET_REQUEST_INFO = {
  //本地测试环境
  test: {
    api: "",
    ftp: "",
  },
  // 上线测试环境
  dev: {
    api: "",
    ftp: "",
  },
  // 正式环境
  pro: {
    api: "",
    ftp: "",
  },
};
// 获取数据接口
export const HTTP_REQUEST_API: string = GET_REQUEST_INFO[CONTEXT].api;
// 获取FTP接口
export const HTTP_REQUEST_FTP: string = GET_REQUEST_INFO[CONTEXT].ftp;
