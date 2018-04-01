const app = getApp()
var http = require('../../utils/httpUtil.js')

Page({
  data:{

  },
  onLoad:function(options){
    var api = ""+options.id
    var params = {

    }
    http.GET(api, params, function (res) {

    })
  }
})