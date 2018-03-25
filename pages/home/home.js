const app = getApp()

Page({
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
  }

})