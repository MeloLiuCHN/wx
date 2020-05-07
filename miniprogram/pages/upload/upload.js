Page({
  data: {
   imgData: []
  },
  uploadPhoto(e) { // 拍摄或从相册选取上传
   let that = this;
   wx.chooseImage({
    count: 1, // 默认9
    sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
    success(res) {
     let tempFilePaths = res.tempFilePaths; // 返回选定照片的本地路径列表 
     that.upload(that, tempFilePaths);
    }
   })
  },
  upload(page, path) { // 上传图片
   wx.showToast({ icon: "loading", title: "正在上传……" });
   wx.uploadFile({
    url: 'http://10.19.92.60:16002/api/v0/file/13080111/1305225180/909', //后端接口
    filePath: path[0],
    name: 'file',
    header: {
     "Content-Type": "multipart/form-data"
    },
    success(res) {
      console.log(res)
     if (res.statusCode != 200) {
      wx.showModal({ title: '提示', content: '上传失败', showCancel: false });
      return;
     } else{
      console.log("上传成功！ 可对返回的值进行操作，比如：存入imgData；");
     }
    },
    fail(e) {
      console.log(e)
     wx.showModal({ title: '提示', content: '上传失败', showCancel: false });
    },
    complete() {
     wx.hideToast(); //隐藏Toast
    }
   })
  }
 })