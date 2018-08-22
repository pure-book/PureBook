function tabbarinit() {





    return [{
            "current": 0,
            "pagePath": "../../pages/book/book",
            "iconPath": "../../images/Introduction.png",
            "selectedIconPath": "../../images/IntroductionSelected.png",
            "text": "Introduction"
        },
        {
            "current": 0,
            "pagePath": "../../pages/bookExcerpt/bookExcerpt",
            "iconPath": "../../images/Excerpt.png",
            "selectedIconPath": "../../images/ExcerptSelected.png",
            "text": "Excerpt"




        },
        {
            "current": 0,
            "pagePath": "../../pages/bookReview/bookReview",
            "iconPath": "../../images/Review.png",
            "selectedIconPath": "../../images/ReviewSelected.png",
            "text": "Review"





        },
    ]
}








function tabbarmain(bindName = "tabdata", id, target) {
    var that = target;
    var bindData = {};
    var otabbar = tabbarinit();
    otabbar[id]['iconPath'] = otabbar[id]['selectedIconPath'] //换当前的icon
    otabbar[id]['current'] = 1;
    bindData[bindName] = otabbar
    bindData['bookId'] = bindData.tabbar
    that.setData({ bindData })

}

module.exports = {
    tabbar: tabbarmain
}