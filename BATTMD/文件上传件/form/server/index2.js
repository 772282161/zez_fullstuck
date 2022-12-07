// 多文件上传
const Koa = require('koa2')
const KoaBody = require('koa-body')
const path = require('path')
const koaStatic = require('koa-static')
const fs = require('fs')
const app = new Koa()

app.use(KoaBody({
  formidable: {
    uploadDir: path.resolve(__dirname, './static')
  },
  multipart: true
}))

// 启动静态资源的访问
app.use(koaStatic(
  path.resolve(__dirname, './static')
))

// 处理文件
app.use((ctx) => {
  console.log(ctx.request.files);
  let file = ctx.request.files ? ctx.request.files.f1 : null
  let result = []

  file.forEach((item) => {
    let path = item.path.replace(/\\/g, '/')
    let name = item.name
    let nextPath = path + name
    if (item.size > 0 && path) {
      let extArr = name.split('.')
      let ext = extArr[extArr.length - 1]
      nextPath = path + '.' + ext
      fs.renameSync(path, nextPath)

      result.push(`http://localhost:3000/${nextPath.slice(nextPath.lastIndexOf('/') + 1)}`)
    }
  })

  ctx.body = {
    'fileUrl': result
  }
})

app.listen(3000, () => {
  console.log('服务已启动');
})