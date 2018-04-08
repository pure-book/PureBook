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
        bookTag:""
      }],
      likeStatus:false
    }
    
    
  },

  onLoad:function(options){
    template.tabbar("tabbar", 0, this)
    var that = this
    var api1 = "/books/"+options.id
    var params1 = {}
    http.GET(api1, params1, function (res) {
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
    var api2 = "/users/" + app.globalData.userId+"/relation"
    var params2 = {
      'bookId': options.id
    }
    http.GET(api2, params2, function (res) {
      if(res.data.message=="成功"){
        that.setData({
          likeStatus:true
        })
      }else{
        that.setData({
          likeStatus: false
        })
      }
    })


    var api3 = "/books/" + options.id + "/tags"
    var params3 = {}
    http.GET(api3, params3, function (res) {
      const data = res.data.data
      for (var i = 0; i < 4; i++) {
        const param1 = "bookInfo.bookTagArray[" + i + "].bookTag"       
        that.setData({
          [param1]: data[i].field,
        })
      }
    })

    var api4 = "/books/" + options.id + "/excerpt"
    var params4 = {}
    http.GET(api4, params4, function (res) {
      const data = res.data.data
      that.setData({
        'bookInfo.bookSentence': data[0].content.slice(0, 41) + "..."
      })
    })
    
  },

  setlike: function () {
    var that = this
    var api = "/users/" + app.globalData.userId + "/collection"
    var params = {
      'bookId': that.data.bookInfo.bookId
    }
    http.POST(api, params, function (res) {
      console.log(res)
      wx.showToast({
        title: '已喜欢本书',
        duration: 1500
      })
      that.setData({
        likeStatus: true
      })
    })
  },

  setunlike: function () {
    var that = this
    var api = "/users/" + app.globalData.userId + "/collection?bookId=" + that.data.bookInfo.bookId
    var params = {
      //'bookId': that.data.bookInfo.bookId
    }
    http.DELETE(api,params,function(res){
      if(res.data.message=="成功"){
        wx.showToast({
          title: '已取消喜欢本书',
          duration: 1500
        })
        that.setData({
          likeStatus: false
        })
      }else{
        wx.showToast({
          title: '失败',
          duration: 1500
        })
      }
    })
  },

  jumpAuthor:function(){
    wx.navigateTo({
      url: '../author/author?name='+this.data.bookInfo.authorName,
    })
  }

  

})