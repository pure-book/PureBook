const app = getApp()
var http = require('../../utils/httpUtil.js')


Page({
  data:{
    recommendBookArray:[{
      recommendBookTitle:"",
      recommendBookDescription: "",
      recommendBookCover: "",
      recommendBookAuthorAvatar:"../../images/author-1.jpg",
      recommendBookAuthorName:"",
      recommendBookId:0,
      likeStatus: false
    }],
    recommendBooklistArray:[{
      recommendBooklistTitle:"艺术，音乐与文学鉴赏",
      recommendBooklistId:0
    },{
      recommendBooklistTitle: "关于程序员的自我修养",
      recommendBooklistId: 0
    },{
      recommendBooklistTitle: "轻小说合集",
      recommendBooklistId: 0
    }],
    
    haveRead:0
  },
  
  onLoad:function(){
    var that = this
    var api1 = "/users/" + app.globalData.userId + "/recommand"
    var api3 = "/users/" + app.globalData.userId + "/relation"
    var params1={}
    http.GET(api1,params1,function(res){
      const data = res.data.data
      console.log(data)
      for(let i = 0;i< data.length;i++){
        const param1 = "recommendBookArray[" + i + "].recommendBookTitle"
        const param2 = "recommendBookArray[" + i + "].recommendBookDescription"
        const param3 = "recommendBookArray[" + i + "].recommendBookCover"
        const param4 = "recommendBookArray[" + i + "].recommendBookAuthorAvatar"
        const param5 = "recommendBookArray[" + i + "].recommendBookAuthorName"
        const param6 = "recommendBookArray["+i+"].recommendBookId"
        const param7 = "recommendBookArray["+i+"].likeStatus"
        that.setData({
          [param1]:data[i].name,
          [param2]:data[i].intro.slice(0,46)+"...",
          [param3]:data[i].cover,
          [param5]:data[i].author,
          [param6]:data[i].id
        })
        var params3 = {'bookId':data[i].id}
        http.GET(api3, params3, function(res) {
          if (res.data.message == "成功") {
            that.setData({
              [param7]: true
            })
          } else {
            that.setData({
              [param7]: false
            })
          }
        })
      }
    })

    /*var api2 = "/users/" + app.globalData.userId + "/recommendation"
    var params2={}
    http.GET(api2,params2,function(res){
      const data = res.data.data
      for(let j=0;j<data.length;j++){
        const param1 = "recommendBooklistArray["+i+"].recommendBooklistTitle"
        const param2 = "recommendBooklistArray["+i+"].recommendBooklistId"
      }
      that.setData({

      })
    })*/

  },

  jumpBook:function(e){
    var index = e.target.dataset.index
    console.log(e)
    wx.navigateTo({
      url: "../book/book?id=" + this.data.recommendBookArray[index].recommendBookId
    })
  },

  jumpBooklist:function(e){
    var index = e.target.dataset.index
    wx.navigateTo({
      url: '../booklist/booklist?id=' + this.data.recommendBooklistArray[index].recommendBooklistId + '&name=' + this.data.recommendBooklistArray[index].recommendBooklistTitle
    })
  },

  setlike:function(e){
    var that = this
    var index = e.target.dataset.index
    var param = "recommendBookArray[" + index + "].likeStatus"
    var api = "/users/" + app.globalData.userId + "/collection"
    var params = {
      'bookId': that.data.recommendBookArray[index].recommendBookId
    }
    http.POST(api, params, function (res) {
      console.log(res)
      wx.showToast({
        title: '已喜欢本书',
        duration: 1500
      })
      that.setData({
        [param]: true
      })
    })
  },

  setunlike: function (e) {
    var that = this
    var index = e.target.dataset.index
    var api = "/users/" + app.globalData.userId + "/collection?bookId=" + that.data.recommendBookArray[index].recommendBookId
    var param = "recommendBookArray[" + index + "].likeStatus"
    var params = {
    }
    http.DELETE(api, params, function (res) {
      if (res.data.message == "成功") {
        wx.showToast({
          title: '已取消喜欢本书',
          duration: 1500
        })
        that.setData({
          [param]: false
        })
      } else {
        wx.showToast({
          title: '失败',
          duration: 1500
        })
      }

    })
    
    
  }

  

})