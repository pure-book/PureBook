const app = getApp()
var http = require('../../utils/httpUtil.js')
Page({
    data: {
        userInfo: {}
    },

    onLoad: function() {
        var that = this
        app.getUserInfo(function(userInfo) {
            that.setData({
                userInfo: userInfo
            })
        })

    },

    gotolike: function() {
        wx.navigateTo({
            url: '../like/like',
        })
    },
    gotomyBooklist: function() {
        wx.navigateTo({
            url: '../myBooklist/myBooklist',
        })
    },
    gotomyReview: function() {
        wx.navigateTo({
            url: '../myReview/myReview',
        })
    },
    gotomysetting: function() {
        wx.navigateTo({
            url: '../setting/setting',
        })
    }
})