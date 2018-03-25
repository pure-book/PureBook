function tabbarinit(){
  return [
    {
      "current": 0,
      "pagePath": "../../pages/book/book",
      "iconPath": "",
      "selectedIconPath": "",
      "text": "Introduction"
    },
    {
      "current": 0,
      "pagePath": "../../pages/bookExcerpt/bookExcerpt",
      "iconPath": "",
      "selectedIconPath": "",
      "text": "Excerpt"

    },
    {
      "current": 0,
      "pagePath": "../../pages/bookReview/bookReview",
      "iconPath": "",
      "selectedIconPath": "",
      "text": "Reivew"
    },
    
  ]
}

function tabbarmain(bindName = "tabdata", id, target) {
  var that = target;
  var bindData = {};
  var otabbar = tabbarinit();
  otabbar[id]['iconPath'] = otabbar[id]['selectedIconPath']//换当前的icon
  otabbar[id]['current'] = 1;
  bindData[bindName] = otabbar
  that.setData({ bindData });
}

module.exports = {
  tabbar: tabbarmain
}