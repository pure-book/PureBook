// pages/addReview/addReview.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    bookInfo: {
      bookName: "哥伦比亚的倒影",
      bookAuthor: "木心（1927-2011）"
    },
    bookExcerptArray: [{
      excerptContent: "古老的国族，街头巷尾亭角桥堍，无不可见一闪一烁的人文剧情，名城宿迹，更是重重叠叠的往事尘梦，郁积得憋不过来了，幸亏总有春花秋月等闲度地在那里抚恤纾解，透一口气，透一口气，已是历史的喘息。"
    }, {
      excerptContent: "人害怕寂寞，害怕到无耻的程度。换言之，人的某些无耻行径是由于害怕寂寞而做出来的。"
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  submitReview: function(){
    wx.showToast({
      title: '已提交'
    })
  }
})