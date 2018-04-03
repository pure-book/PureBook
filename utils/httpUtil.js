var baseUrl = "http://101.132.123.33:8080/purebook/v1"
var GET_METHOD="GET"
var POST_METHOD="POST"


function request(api,method,params,success){
  wx.showToast({
    title: '加载中', 
    duration:10000
  })
  wx.request({
    url: baseUrl+api,
    method:method,
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
  request(api,GET_METHOD,params,success)
}

function postRequest(api, params, success) {
  request(api,POST_METHOD, params, success)
}


module.exports={
  GET:getRequest,
  POST:postRequest,

}