// pages/bookReview/bookReview.js
var template = require('../../components/tabbar/tabbar.js')
var http = require('../../utils/httpUtil.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookInfo:{
      bookTitle:"哥伦比亚的倒影",
      bookAuthor:"木心(1927-2011)"
    },
    bookReviewArray:[{
      bookReviewTitle:"顾影的木心",
      bookReviewUserAvatar:"../../images/author-1.jpg",
      bookReviewUserName:"潇湘夜雨",
      bookReviewContent:"记者采访木心，谈及木心名字由来，乃孔子弟子称颂老师的话“夫子木铎有心”。限于识见，我未找到此语的出处，倒是论语中有“天将以夫子为木铎”之语。"
    },{
      bookReviewTitle:"顾影的木心",
      bookReviewUserAvatar:"../../images/author-1.jpg",
      bookReviewUserName:"潇湘夜雨",
      bookReviewContent:"记者采访木心，谈及木心名字由来，乃孔子弟子称颂老师的话“夫子木铎有心”。限于识见，我未找到此语的出处，倒是论语中有“天将以夫子为木铎”之语。"
    }]
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    template.tabbar("tabbar", 2, this)
    var api = ""
    var params = {

    }
    http.GET(api, params, function (res) {

    })
  
  },


  addReview:function(){
    wx.navigateTo({
      url: '../addReview/addReview',
    })
  },

  jumpReview:function(){
    wx.navigateTo({
      url: '../reviewDetail/reviewDetail',
    })
  }
})