const app = getApp()
var template = require('../../components/tabbar/tabbar.js');
Page({
  data:{
    bookInfo:{
      bookSentence: "人害怕寂寞，害怕到无耻的程度。换言之，人的某些无耻行径是由于害怕寂寞而做出来的。",
      bookCover:"../../images/book-cover-1.jpeg",
      bookTitle:"哥伦比亚的倒影",
      authorName:"木心(1927-2011)",
      bookDescription: "他的文字，是那么样的一种富有人类感情与文化表情的中国汉字，优雅、从容、洗练、蕴藉，极为讲究。洋粹他也懂，国粹他也懂，但他不是简单的中西合璧，弄出个“三明治”来，就像他用水墨来描画他的风景，他是用纯粹的中文书写思维，来表述他对世界的体认与感怀。他也用汉赋般的奇字，但不怪。他的文字有节奏，一读就发现标点的重要。他可以东一个棋西一个棋地走，到后来平平服服。",
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

  onLoad:function(){
    template.tabbar("tabbar", 0, this)
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