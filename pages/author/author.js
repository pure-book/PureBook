const app = getApp()
var http = require('../../utils/httpUtil.js')

Page({
  data:{
    authorInfo:{
      authorName:"木心（1927-2011)",
      authorDescription:"木心，中国当代文学大师、画家，在台湾和纽约华人圈被视为深解中国传统文化的精英和传奇人物。出版多部著作。1927年生于浙江桐乡乌镇东栅。本名孙璞，字仰中，号牧心，笔名木心。毕业于上海美术专科学校。1982年定居纽约。2011年12月21日3时逝世于故乡乌镇，享年84岁。"
    },
    authorWorkArray:[{
      authorWorkTitle:"",
      authorWorkId:0
    }]
  },

  onLoad:function(options){
    var that = this
    var api1 = "/author/"
    var params1 = { 'name': options.name }
    http.GET(api1, params1, function (res) {
      const data1 = res.data.data
      console.log(data1)
      that.setData({
        'authorInfo.authorName':data1[0].name,
        'authorInfo.authorDescription':data1[0].intro,
      })

      for(let i =0;i<data1.length;i++){
        const param1 = 'authorWorkArray['+i+'].authorWorkId'
        const param2 = 'authorWorkArray[' + i + '].authorWorkTitle'
        that.setData({
          [param1]:data1[i].bookId,
        })
        var api2 = "/books/"+data1[i].bookId
        var params2 = {}
        http.GET(api2,params2,function(r){
          const data2 = r.data.data
          console.log(data2)
          that.setData({
            [param2]:data2.name
          })

        })
      } 
    })
  },

  jumpBook:function(e){
    var index = e.target.dataset.index
    wx.navigateTo({
      url: '../book/book?id='+this.data.authorWorkArray[index].authorWorkId,
    })
  }
  
})