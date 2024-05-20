//TODO:参数显示
//TODO:vue  build时  npm run build  有 一些 错误 无法 编译 完成
//TODO3:历史数据查询   生产  和   报警  在对应刷新 旁边

//TODO110:服务器停止或 网络断线要提示或标志,判断服务器是否有连接
//TODO12:日清单显示可能要考虑这次减前次
//TODO22:提供参数读取界面
//TODO122:报警实时读取在vue中，历史记录要500条


//TODO111:fastapi 暂时 部署 开发模式  uvicorn main:app  --host 0.0.0.0 --reload，后面 要  gunicorn main:app -w 4 -k uvicorn.workers.UvicornWorker --daemon  以及  nginx
//TODO2222:开发阶段对要求登录的页面,和访问fastapi未限制,后期补上，页面参考 register,在router中meta加要求；fastapi参考 register的 token: str = Depends(oauth2_scheme)
//TODO1111:后期设备图片 改成 监控 画面 试试
//TODO3333:设置参数
//FIXME22:遗嘱消息 功能 ，应该是断线后会提交 信息(比较长时间才收到 offline，90s左右--可能和某个设置有关)，便于判断是否 离线或 在线
//FIXME222:fastapi 的默认8000端口是否要打开，会不会 不安全，特别是docs,会暴露所有路由