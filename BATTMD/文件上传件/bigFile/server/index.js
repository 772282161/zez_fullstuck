const Koa = require('koa2')
const koaStatic = require('koa-static')
const koaBody = require('koa-body')
const path = require('path')
const fs = require('fs')
const cors = require('koa2-cors')
const { createContext } = require('vm')

const app = new Koa()
const port = process.env.port || '3000'
const uploadHost = `http://localhost:${port}`

app.use(koaBody({
  formidable: {
    uploadDir: path.resolve(__dirname, './static')
  },
  multipart: true
}))

app.use(koaStatic(
  path.resolve(__dirname, './static')
))


app.use(cors())

app.use((ctx) => { //处理接受的文件片段
  // console.log(ctx.request.body);
  let body = ctx.request.body;
  let files = ctx.request.files ? ctx.request.files.f1 : []
  let resule = []
  let fileToken = ctx.request.body.token
  let fileIndex = ctx.request.body.index

  if (files && !Array.isArray(files)) {
    files = [files] // 多个数组
  }

  // console.log(files);
  files && files.forEach(item => {
    let path = item.path.replace(/\\/g, '/');
    let fname = item.name
    let nextPath = path.slice(0, path.lastIndexOf('/') + 1) + fileIndex + '-' + fileToken;
    if (item.size > 0 && path) {
      let extArr = fname.split('.')
      let ext = extArr[extArr.length - 1] // mp3
      fs.renameSync(path, nextPath)

      resule.push(uploadHost + nextPath.slice(nextPath.lastIndexOf('/') + 1))
    }
  })

  ctx.body = {
    fileUrl: `${JSON.stringify(resule)}`
  }

  // 合并文件片段
  if(body.type === 'merge'){
    let filename = body.filename,
      chunkCount = body.chunkCount,
      folder = path.resolve(__dirname,'./static') + '/';
    let writeStream = fs.createWriteStream(`${folder}${filename}`)
    let cindex = 0
    // 合并
    function fnMergeFile() {
      let fname = `${folder}${cindex}-${fileToken}`;
      let readStream = fs.createReadStream(fname)
      readStream.pipe(writeStream,{end:false})
      readStream.on('end',function(){
        fs.unlink(fname,function(err){
          if(err){
            throw err
          }
        })
        if (cindex + 1 < chunkCount ) {
          cindex += 1
          fnMergeFile()
        }
      })
    }
    fnMergeFile()

    ctx.body = 'merge ok 200'
  }
})


app.listen(3000, () => {
  console.log('服务已启动');
})
