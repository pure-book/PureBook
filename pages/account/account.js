const app = getApp()

Page({
  gotolike: function () {
    wx.navigateTo({
      url: '../like/like',
    })
  },
  gotomyBooklist: function () {
    wx.navigateTo({
      url: '../myBooklist/myBooklist',
    })
  },
  gotomyReview: function () {
    wx.navigateTo({
      url: '../myReview/myReview',
    })
  },
  gotomysetting: function () {
    wx.navigateTo({
      url: '../setting/setting',
    })
  }
})

