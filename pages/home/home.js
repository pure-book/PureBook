const app = getApp()
var http = require('../../utils/httpUtil.js')
var api = ""
var params = {

}


Page({
  data:{
    recommendBookArray:[{
      recommendBookTitle:"哥伦比亚的倒影",
      recommendBookDescription: "人害怕寂寞，害怕到无耻的程度。换言之，人的某些无耻行径是由于害怕寂寞而做出来的。",
      recommendBookCover: "../../images/book-cover-1.jpeg",
      recommendBookAuthorAvatar:"../../images/author-1.jpg",
      recommendBookAuthorName:"木心 作品",
      likeStatus: false
    },{
      recommendBookTitle:"哥伦比亚的倒影",
      recommendBookDescription: "人害怕寂寞，害怕到无耻的程度。换言之，人的某些无耻行径是由于害怕寂寞而做出来的。",
      recommendBookCover: "../../images/book-cover-1.jpeg",
      recommendBookAuthorAvatar:"../../images/author-1.jpg",
      recommendBookAuthorName:"木心 作品",
      likeStatus: true
    }],
    recommendBooklistArray:[{
      recommendBooklistTitle:"艺术，音乐与文学鉴赏"
    },{
      recommendBooklistTitle: "关于程序员的自我修养"
    },{
      recommendBooklistTitle: "轻小说合集"
    }],
    
    haveRead:0
  },
  
  onLoad:function(){
      
  },

  jumpAuthor:function(){
    wx.navigateTo({
      url:"../author/author"
    })
  },
  
  jumpBook:function(){
    wx.navigateTo({
      url:"../book/book",
    })
  },

  jumpBooklist:function(){
    wx.navigateTo({
      url: '../booklist/booklist',
    })
  },

  setlike:function(e){
    var index = e.target.dataset.index
    var param = "recommendBookArray[" + index + "].likeStatus"
    wx.showToast({
      title: '已喜欢本书',
      duration: 1500
    }),
    
    this.setData({
      [param]: true
    })
  },
  setunlike: function (e) {
    var index = e.target.dataset.index
    var param = "recommendBookArray[" + index + "].likeStatus"
    wx.showToast({
      title: '已取消喜欢本书',
      duration: 1500
    }),
    this.setData({
      [param]: false
    })
  }

})