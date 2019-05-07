// pages/index/index.js
Page({

  /**
   * Page initial data
   */
  data: {
    time: (new Date()).toString()
  },

  data1: {
    message: 'Welcome to liuyangjinnang'
  },


  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    
  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },

  openpdf: function(){
    wx.downloadFile({
      url: 'https://7374-stayingabroad1-d3dbd1-1258081296.tcb.qcloud.la/automated test log management v0.0.2.pdf?sign=717a1a61e26e5bafb2466dcf554cbaed&t=1557046458',
      success: function (res) {
        var filePath = res.tempFilePath
        wx.openDocument({
          filePath: filePath,
          success: function (res) {
            console.log('打开文档成功')
          }
        })
      }
    })

  }
})