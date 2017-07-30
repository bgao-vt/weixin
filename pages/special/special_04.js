// pages/special/special_04.js
var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 'special_04',
    isCollect: false, //是否被收藏
    news: { title: '新首钢', image: ['../../images/bg.jpg'], numImage: 1, url: '../../pages/special/special_04' }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var id = this.data.id;
    var pageData = wx.getStorageSync('pageData') || []
    for (var i = 0; i < pageData.length; i++) {
      if (pageData[i].id == id) {
        this.setData({ isCollect: true });
        break;
      }
    }
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

  /**
  * 页面收藏功能
  */
  collectOrNot: function () {
    var that = this;
    util.collectOrNot(that);
  }
})