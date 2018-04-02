// pages/reviewDetail/reviewDetail.js
const app = getApp()
var http = require('../../utils/httpUtil.js')

Page({

  data: {
    bookInfo:{
      bookTitle: "",
      authorName: "",
      bookId:0
    },
    reviewInfo:{
      reviewId: 0,
      reviewTitle:"",
      reviewUserName:"",
      reviewUserAvatar:"",
      reviewUserId:0,
      reviewContent: ""
    }
  
  },

  onLoad: function (options) {
    var that = this
    var api = "/books/"+options.id+"/review"
    var params = {}
    console.log(options)
    http.GET(api, params, function (res) {
      const data = res.data.data;
      console.log(data)
      that.setData({
        'bookInfo.bookTitle': options.bookName,
        'bookInfo.authorName': options.bookAuthor,
        'bookInfo.bookId':data.bookId,
        'reviewInfo.reviewTitle': data.title,
        'reviewInfo.reviewId': data.id,
        'reviewInfo.reviewUserName': data.userName,
        'reviewInfo.reviewUserAvatar': data.userAvatar,
        'reviewInfo.reviewUserId': data.userId,
        'reviewInfo.reviewContent':data.review

      })
      
    })

  },


})