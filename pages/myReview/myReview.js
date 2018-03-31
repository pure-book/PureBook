const app = getApp()

Page({
  gotoreview: function(){
    wx.navigateTo({
      url: '../bookReview/bookReview',
    })
  }

})