const app = getApp()
var template = require('../../components/tabbar/tabbar.js');
Page({
  data:{
    
  },

  onLoad:function(){
    template.tabbar("tabbar", 0, this)
  },


})