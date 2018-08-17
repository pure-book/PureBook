App({
    onLaunch: function() {
        let logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)
        let id = ""
        wx.login({
            success: function(r) {
                let code = r.code;
                if (code) {
                    wx.getUserInfo({
                        success: function(res) {
                            wx.request({
                                url: 'http://101.132.123.33:8080/v1/login/decodeUserInfo',
                                method: "POST",

                                data: {

                                    encryptedData: res.encryptedData,
                                    iv: res.iv,
                                    code: code,
                                    userName: res.userInfo.nickName,
                                    userAvatar: res.userInfo.avatarUrl
                                },
                                //判断是否解密成功
                                success: function(data) {
                                    if (data.data.status == 1) {
                                        let userInfo_ = data.data.userInfo
                                        id = userInfo_.openId
                                        that.globalData.userId = id
                                        console.log(that.globalData.userId)
                                    } else {
                                        console.log("解密失败");
                                    }
                                },
                                fail: function() {
                                    console.log("系统错误");
                                }
                            })
                        },
                        fail: function(res) {
                            console.log("获取用户信息失败" + res.errMsg);
                        }
                    })
                } else {
                    console.log("获取用户登录状态失败" + r.errMsg);
                }

                // 发送 res.code 到后台换取 openId, sessionKey, unionId
            },
            fail: function() {
                callback(false)
            }
        })

        // 获取用户信息
        wx.getSetting({
            success: res => {
                if (res.authSetting['scope.userInfo']) {
                    // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                    wx.getUserInfo({
                        success: res => {
                            // 可以将 res 发送给后台解码出 unionId
                            that.globalData.userInfo = res.userInfo;

                            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                            // 所以此处加入 callback 以防止这种情况
                            if (this.userInfoReadyCallback) {
                                this.userInfoReadyCallback(res)
                            }
                        }
                    })
                }
            }
        })
    },

    getUserInfo: function(cb) {
        var that = this
        if (this.globalData.userInfo) {
            typeof cb == "function" && cb(this.globalData.userInfo)
        } else {
            wx.login({
                success: function() {
                    wx.getUserInfo({
                        success: function(res) {
                            that.globalData.userInfo = res.userInfo
                            typeof cb == "function" && cb(that.globalData.userInfo)
                        }
                    })
                }
            })
        }
    },
    globalData: {
        userInfo: null,
        userId: "",
        currentBookId: 0
    }
})