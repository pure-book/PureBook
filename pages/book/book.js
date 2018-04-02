const app = getApp()
var template = require('../../components/tabbar/tabbar.js');
var http = require('../../utils/httpUtil.js')

Page({
  data:{
    bookInfo:{
      bookId:0,
      bookSentence: "人害怕寂寞，害怕到无耻的程度。换言之，人的某些无耻行径是由于害怕寂寞而做出来的。",
      bookCover:"",
      bookTitle:"",
      authorName:"",
      bookDescription: "",
      bookTagArray:[{
        bookTag:"木心作品"
      },{
        bookTag:"艺术"
      },{
        bookTag:"人文"
      },{
        bookTag:"散文"
      }],
      likeStatus:false
    }
    
    
  },

  onLoad:function(options){
    template.tabbar("tabbar", 0, this)

    var api = "/books/"+options.id
    var that = this
    var params = {
    }
    http.GET(api, params, function (res) {
      const data = res.data.data
      app.globalData.currentBookId = data.id
      that.setData({
        'bookInfo.bookId':data.id,
        'bookInfo.bookTitle':data.name,
        'bookInfo.bookCover':data.cover,
        'bookInfo.bookDescription':data.intro,
        'bookInfo.authorName':data.author

      })
      


    })

    
  },

  setlike: function () {
    wx.showToast({
      title: '已喜欢本书',
      duration: 1500
    }),

      this.setData({
        likeStatus: true
      })
  },
  setunlike: function () {
    wx.showToast({
      title: '已取消喜欢本书',
      duration: 1500
    }),
      this.setData({
        likeStatus: false
      })
  }

  

})