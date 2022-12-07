class PreLoadImage {
  static LOADING_URL = 'xxxx.jpg'

  constructor(imgNode){
    this.imgNode = imgNode
  }

  setSrc(targetUrl){
    this.imgNode.src = PreLoadImage.LOADING_URL
    const image = new Image()
    image.onload = function() {
      this.imgNode.src = targetUrl
    }
    image.src = targetUrl
  }
}