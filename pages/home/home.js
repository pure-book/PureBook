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
      recommendBooklistTitle:"",
      recommendBooklistId:0
    }],
    
    haveRead:0,
  },
  
  onLoad:function(){
    var that = this
    var api1 = "/users/" + app.globalData.userId + "/recommand"
    console.log(api1)
    var api2 = "/users/" + app.globalData.userId + "/recommandbooklist"
    var api3 = "/users/" + app.globalData.userId + "/relation"
    var params1 = {}
    var params2 = {}
    http.GET(api1,params1,function(res){
      const data1 = res.data.data
      that.setData({
        haveRead:data1.length
      })
      for(let i = 0;i< data1.length;i++){
        const param1 = "recommendBookArray[" + i + "].recommendBookTitle"
        const param2 = "recommendBookArray[" + i + "].recommendBookDescription"
        const param3 = "recommendBookArray[" + i + "].recommendBookCover"
        const param4 = "recommendBookArray[" + i + "].recommendBookAuthorAvatar"
        const param5 = "recommendBookArray[" + i + "].recommendBookAuthorName"
        const param6 = "recommendBookArray[" + i + "].recommendBookId"
        const param7 = "recommendBookArray[" + i + "].likeStatus"
        that.setData({
          [param1]:data1[i].name,
          [param2]:data1[i].intro.slice(0,46)+"...",
          [param3]:data1[i].cover,
          [param4]: "../../images/author-1.jpg",
          [param5]:data1[i].author,
          [param6]:data1[i].id
        })
        var params3 = {'bookId':data1[i].id}
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

    http.GET(api2,params2,function(res){
      const data2 = res.data.data
      for(let j=0;j<data2.length;j++){
        const param8 = "recommendBooklistArray["+j+"].recommendBooklistTitle"
        const param9 = "recommendBooklistArray["+j+"].recommendBooklistId"
        that.setData({
          [param8]: data2[j].name,
          [param9]: data2[j].id
        })
      }
      
    })

  },

  jumpBook:function(e){
    var that = this
    var index = e.currentTarget.dataset.index
    wx.navigateTo({
      url: "../book/book?id=" + that.data.recommendBookArray[index].recommendBookId
    })
  },

  jumpBooklist:function(e){
    var that = this
    var index = e.currentTarget.dataset.index
    console.log(index)
    wx.navigateTo({
      url: '../booklist/booklist?id=' + that.data.recommendBooklistArray[index].recommendBooklistId + '&name=' + that.data.recommendBooklistArray[index].recommendBooklistTitle
    })
  },

  setlike:function(e){
    var that = this
    var index = e.currentTarget.dataset.index
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
    var index = e.currentTarget.dataset.index
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