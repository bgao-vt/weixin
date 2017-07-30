// pages/key/key.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articleData: [
      {
        "id": 0,
        "title": '北京保险产业园',
        "image": 'http://shijingshan-1254017066.costj.myqcloud.com/article_images/key/%E5%8C%97%E4%BA%AC%E4%BF%9D%E9%99%A9%E4%BA%A7%E4%B8%9A%E5%9B%AD.jpg',
        "url": '../key/key_01'
      },
      {
        "id": 1,
        "title": '世界侨商创新中心',
        "image": 'http://shijingshan-1254017066.costj.myqcloud.com/article_images/key/%E4%B8%96%E7%95%8C%E4%BE%A8%E5%95%86%E5%88%9B%E6%96%B0%E4%B8%AD%E5%BF%83.jpg',
        "url": '../key/key_02'
      },
      {
        "id": 2,
        "title": '首钢•城市织补创新工场东区',
        "image": 'http://shijingshan-1254017066.costj.myqcloud.com/article_images/key/%E9%A6%96%E9%92%A2%E5%9F%8E%E5%B8%82%E7%BB%87%E8%A1%A5%E5%88%9B%E6%96%B0%E5%B7%A5%E5%9C%BA%E4%B8%9C%E5%8C%BA.jpg',
        "url": '../key/key_03'
      },
      {
        "id": 3,
        "title": '银河商务区L地块',
        "image": 'http://shijingshan-1254017066.costj.myqcloud.com/article_images/key/%E9%93%B6%E6%B2%B3%E5%95%86%E5%8A%A1%E5%8C%BAL%E5%9C%B0%E5%9D%97.jpg',
        "url": '../key/key_04'
      },
      {
        "id": 4,
        "title": '刘娘府A2部分地块',
        "image": 'http://shijingshan-1254017066.costj.myqcloud.com/article_images/key/%E5%88%98%E5%A8%98%E5%BA%9CA2%E9%83%A8%E5%88%86%E5%9C%B0%E5%9D%97.jpg',
        "url": '../key/key_05'
      },
      {
        "id": 5,
        "title": '西井地块',
        "image": 'http://shijingshan-1254017066.costj.myqcloud.com/article_images/key/%E8%A5%BF%E4%BA%95%E5%9C%B0%E5%9D%97.jpg',
        "url": '../key/key_06'
      },
      {
        "id": 6,
        "title": '创业创新园',
        "image": 'http://shijingshan-1254017066.costj.myqcloud.com/article_images/key/%E5%88%9B%E4%B8%9A%E5%88%9B%E6%96%B0%E5%9B%AD.png',
        "url": '../key/key_07'
      },
      {
        "id": 7,
        "title": '集体土地再利用项目',
        "image": 'http://shijingshan-1254017066.costj.myqcloud.com/article_images/key/%E9%9B%86%E4%BD%93%E5%9C%9F%E5%9C%B0%E5%86%8D%E5%88%A9%E7%94%A8%E9%A1%B9%E7%9B%AE.png',
        "url": '../key/key_08'
      },
      {
        "id": 8,
        "title": '衙门口综合环境整治项目',
        "image": 'http://shijingshan-1254017066.costj.myqcloud.com/article_images/key/%E8%A1%99%E9%97%A8%E5%8F%A3%E7%BB%BC%E5%90%88%E7%8E%AF%E5%A2%83%E6%95%B4%E6%B2%BB%E9%A1%B9%E7%9B%AE.jpg',
        "url": '../key/key_09'
      },
      {
        "id": 9,
        "title": '模式口历史文化保护区修缮改造工程',
        "image": 'http://shijingshan-1254017066.costj.myqcloud.com/article_images/key/%E6%A8%A1%E5%BC%8F%E5%8F%A3%E6%96%87%E4%BF%9D%E5%8C%BA%E4%BF%AE%E7%BC%AE%E6%94%B9%E9%80%A0%E5%B7%A5%E7%A8%8B.jpg',
        "url": '../key/key_10'
      }
    ],
    articleData2: [
      {
        "id": 0,
        "title": '金融街（长安）中心',
        "image": 'http://shijingshan-1254017066.costj.myqcloud.com/article_images/key/%E9%87%91%E8%9E%8D%E8%A1%97%E9%95%BF%E5%AE%89%E4%B8%AD%E5%BF%83.jpg',
        "url": '../key/key_11'
      },
      {
        "id": 1,
        "title": '绿地环球文化金融城',
        "image": 'http://shijingshan-1254017066.costj.myqcloud.com/article_images/key/%E7%BB%BF%E5%9C%B0%E7%8E%AF%E7%90%83%E6%96%87%E5%8C%96%E9%87%91%E8%9E%8D%E5%9F%8E.jpg',
        "url": '../key/key_12'
      },
      {
        "id": 2,
        "title": '泰然国际大厦',
        "image": 'http://shijingshan-1254017066.costj.myqcloud.com/article_images/key/%E6%B3%B0%E7%84%B6%E5%9B%BD%E9%99%85%E5%A4%A7%E5%8E%A6.jpg',
        "url": '../key/key_13'
      },
      {
        "id": 3,
        "title": '泰禾长安中心',
        "image": 'http://shijingshan-1254017066.costj.myqcloud.com/article_images/key/%E6%B3%B0%E7%A6%BE%E9%95%BF%E5%AE%89%E4%B8%AD%E5%BF%83.jpg',
        "url": '../key/key_14'
      },
      {
        "id": 4,
        "title": '启迪•香山',
        "image": 'http://shijingshan-1254017066.costj.myqcloud.com/article_images/key/%E5%90%AF%E8%BF%AA%E9%A6%99%E5%B1%B1.jpg',
        "url": '../key/key_15'
      },
      {
        "id": 5,
        "title": '首钢•北七筒',
        "image": 'http://shijingshan-1254017066.costj.myqcloud.com/article_images/key/%E9%A6%96%E9%92%A2%E5%8C%97%E4%B8%83%E7%AD%92.jpg',
        "url": '../key/key_16'
      },
      {
        "id": 6,
        "title": '首钢•脱硫车间改造项目',
        "image": 'http://shijingshan-1254017066.costj.myqcloud.com/article_images/key/%E9%A6%96%E9%92%A2%E8%84%B1%E7%A1%AB%E8%BD%A6%E9%97%B4%E6%94%B9%E9%80%A0%E9%A1%B9%E7%9B%AE.png',
        "url": '../key/key_17'
      },
      {
        "id": 7,
        "title": '首钢体育大厦',
        "image": 'http://shijingshan-1254017066.costj.myqcloud.com/article_images/key/%E9%A6%96%E9%92%A2%E4%BD%93%E8%82%B2%E5%A4%A7%E5%8E%A6.jpg',
        "url": '../key/key_18'
      },
      {
        "id": 8,
        "title": '古城创业大厦',
        "image": 'http://shijingshan-1254017066.costj.myqcloud.com/article_images/key/%E5%8F%A4%E5%9F%8E%E5%88%9B%E4%B8%9A%E5%A4%A7%E5%8E%A6.png',
        "url": '../key/key_19'
      },
      {
        "id": 9,
        "title": '点石商务公园',
        "image": 'http://shijingshan-1254017066.costj.myqcloud.com/article_images/key/%E7%82%B9%E7%9F%B3%E5%95%86%E5%8A%A1%E5%85%AC%E5%9B%AD.jpg',
        "url": '../key/key_20'
      }
    ],
    articleData3: [
      {
        "id": 0,
        "title": '青橄榄创业园',
        "image": 'http://shijingshan-1254017066.costj.myqcloud.com/article_images/key/%E9%9D%92%E6%A9%84%E6%A6%84%E5%88%9B%E4%B8%9A%E5%9B%AD.jpg',
        "url": '../key/key_21'
      },
      {
        "id": 1,
        "title": '青橄榄创新园',
        "image": 'http://shijingshan-1254017066.costj.myqcloud.com/article_images/key/%E9%9D%92%E6%A9%84%E6%A6%84%E5%88%9B%E6%96%B0%E5%9B%AD.png',
        "url": '../key/key_22'
      },
      {
        "id": 2,
        "title": '中海大厦',
        "image": 'http://shijingshan-1254017066.costj.myqcloud.com/article_images/key/%E4%B8%AD%E6%B5%B7%E5%A4%A7%E5%8E%A6.jpg',
        "url": '../key/key_23'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  // 跳转重点项目文章页面
  toKeyPageDetail: function (event) {
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: this.data.articleData[id].url
    })
  },
})