var baseUrl = "http://"
var GET_METHOD="GET"
var GET_HEADER={

}
var POST_METHOD="PUT"
var POST_HEADER={

}

function request(api,method,header,params,success){
  wx.showToast({
    title: '加载中',
    duration:10000
  })
  wx.request({
    url: baseUrl+api,
    method:method,
    header:header,
    data:params,
    success:function(res){
      wx.hideToast()
      success(res)
    },
    fail:function(res){
      wx.showToast({
        title: '请检查网络'
      })
    }

  })
}

function getRequest(api,params,success){
  request(api,GET_METHOD,GET_HEADER,params,success)
}

function postRequest(api, params, success) {
  request(api, POST_METHOD, POST_HEADER, params, success)
}

module.exports={
  GET:getRequest,
  POST:postRequest,
}