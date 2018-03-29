const app = getApp()

Page({
  gotolike: function () {
    wx.navigateTo({
      url: '../like/like',
    })
  },
  gotoread: function () {
    wx.navigateTo({
      url: '../read/read',
    })
  }
})

