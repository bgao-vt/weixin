//index.js
var app = getApp()
Page({
  data: {
    feed_idx: 1,
    isMapClicked: false,

    outlineButtons: [
      {
        "id": 0,
        "title": "区情概况",
        "image": '../../images/icon_overview.png',
        "url": '../outline/overview'
      },
      {
        "id": 1,
        "title": "重点企业",
        "image": '../../images/icon_enterprise.png',
        "url": '../enterprise/enterprise'
      },
      {
        "id": 2,
        "title": "投资政策",
        "image": '../../images/icon_policy.png',
        "url": '../outline/policy'
      }
    ],
    specialButtons: [
      {
        "id": 0,
        "isClicked": false,
        "title": "北京“侨梦苑”",
        "image": 'http://shijingshan-1254017066.costj.myqcloud.com/app_images/banner_index.png',
        "url": '../special/special_01'
      },
      {
        "id": 1,
        "isClicked": false,
        "title": "冬奥产业",
        "image": 'http://shijingshan-1254017066.costj.myqcloud.com/app_images/banner_index.png',
        "url": '../special/special_02'
      },
      {
        "id": 2,
        "isClicked": false,
        "title": "保险产业园",
        "image": 'http://shijingshan-1254017066.costj.myqcloud.com/app_images/banner_index.png',
        "url": '../special/special_03'
      },
      {
        "id": 3,
        "isClicked": false,
        "title": "新首钢",
        "image": 'http://shijingshan-1254017066.costj.myqcloud.com/app_images/banner_index.png',
        "url": '../special/special_04'
      }
    ],
    keyButtons: [
      {
        "id": 0,
        "isClicked": false,
        "title": '北京保险产业园',
        "image": 'http://i4.piimg.com/601999/b59014ab785e15b0.jpg',
        "url": '../key/key_01'
      },
      {
        "id": 1,
        "isClicked": false,
        "title": '世界侨商创新中心',
        "image": 'http://i4.piimg.com/601999/853da717b5b947b2.jpg',
        "url": '../key/key_02'
      },
      {
        "id": 2,
        "isClicked": false,
        "title": '首钢•城市织补\n创新工场东区',
        "image": 'http://i4.piimg.com/601999/c311fe0a30d5add3.jpg',
        "url": '../key/key_03'
      },
      {
        "id": 3,
        "isClicked": false,
        "title": '银河商务区L地块',
        "image": 'http://i4.piimg.com/601999/49c1b4ee7c9ac73e.jpg',
        "url": '../key/key_04'
      },
      {
        "id": 4,
        "isClicked": false,
        "title": '刘娘府A2部分地块',
        "image": 'http://i4.piimg.com/601999/a8e232459cd0b07a.jpg',
        "url": '../key/key_05'
      },
      {
        "id": 5,
        "isClicked": false,
        "title": '西井地块',
        "image": 'http://i4.piimg.com/601999/23d220ccb7365065.jpg',
        "url": '../key/key_06'
      },
      {
        "id": 6,
        "isClicked": false,
        "title": '创业创新园',
        "image": 'http://i4.piimg.com/601999/0922763fd96acbcc.png',
        "url": '../key/key_07'
      },
      {
        "id": 7,
        "isClicked": false,
        "title": '集体土地\n再利用项目',
        "image": 'http://i4.piimg.com/601999/c0f14aed7235c002.png',
        "url": '../key/key_08'
      },
      {
        "id": 8,
        "isClicked": false,
        "title": '衙门口综合\n环境整治项目',
        "image": 'http://i4.piimg.com/601999/aaf32dbd591fd5d5.jpg',
        "url": '../key/key_09'
      },
      {
        "id": 9,
        "isClicked": false,
        "title": '模式口历史文化保\n护区修缮改造工程',
        "image": 'http://i4.piimg.com/601999/b5aab0de9717e1de.jpg',
        "url": '../key/key_10'
      }
    ],
    keyButtons2: [
      {
        "id": 0,
        "isClicked": false,
        "title": '金融街（长安）中心',
        "image": 'http://i4.piimg.com/601999/8adf86b5e5f361ec.jpg',
        "url": '../key/key_11'
      },
      {
        "id": 1,
        "isClicked": false,
        "title": '绿地环球文化金融城',
        "image": 'http://i4.piimg.com/601999/e2ad9f304f818192.jpg',
        "url": '../key/key_12'
      },
      {
        "id": 2,
        "isClicked": false,
        "title": '泰然国际大厦',
        "image": 'http://i4.piimg.com/601999/f32fa8a0edda9303.jpg',
        "url": '../key/key_13'
      },
      {
        "id": 3,
        "isClicked": false,
        "title": '泰禾长安中心',
        "image": 'http://i4.piimg.com/601999/45f80c868a77140e.jpg',
        "url": '../key/key_14'
      },
      {
        "id": 4,
        "isClicked": false,
        "title": '启迪•香山',
        "image": 'http://i4.piimg.com/601999/654a9a817c3b7ff7.jpg',
        "url": '../key/key_15'
      },
      {
        "id": 5,
        "isClicked": false,
        "title": '首钢•北七筒',
        "image": 'http://i4.piimg.com/601999/87d27d8ef619a32e.jpg',
        "url": '../key/key_16'
      },
      {
        "id": 6,
        "isClicked": false,
        "title": '首钢•脱硫车间\n改造项目',
        "image": 'http://i4.piimg.com/601999/e5d151406d00ee29.png',
        "url": '../key/key_17'
      },
      {
        "id": 7,
        "isClicked": false,
        "title": '首钢体育大厦',
        "image": 'http://i4.piimg.com/601999/83a0a5f02e1068a4.jpg',
        "url": '../key/key_18'
      },
      {
        "id": 8,
        "isClicked": false,
        "title": '古城创业大厦',
        "image": 'http://i4.piimg.com/601999/da9bec2d2606bcd7.png',
        "url": '../key/key_19'
      },
      {
        "id": 9,
        "isClicked": false,
        "title": '点石商务公园',
        "image": 'http://i4.piimg.com/601999/5141fd82227266bf.jpg',
        "url": '../key/key_20'
      }
    ],
    keyButtons3: [
      {
        "id": 0,
        "isClicked": false,
        "title": '青橄榄创业园',
        "image": 'http://i4.piimg.com/601999/f898709118f43d01.jpg',
        "url": '../key/key_21'
      },
      {
        "id": 1,
        "isClicked": false,
        "title": '青橄榄创新园',
        "image": 'http://i4.piimg.com/601999/f289149a863ba8b9.png',
        "url": '../key/key_22'
      },
      {
        "id": 2,
        "isClicked": false,
        "title": '中海大厦',
        "image": 'http://i4.piimg.com/601999/483a41a202bde2e6.jpg',
        "url": '../key/key_23'
      }
    ],
    consultTitle: [
      {
        "id": 0,
        "isClicked": false,
        "title": '内资公司如何在石景山注册',
        "url": '../consult/consult_01'
      },
      {
        "id": 1,
        "isClicked": false,
        "title": '1213内资公司如何在石景山注册',
        "url": '../consult/consult_02'
      },
      {
        "id": 2,
        "isClicked": false,
        "title": '343内资公司如何在石景山注册',
        "url": '../consult/consult_01'
      }
    ],
    feedsData: [
      {
        "id": 0,
        "title": '特朗普今日会见奥巴马', 
        "url": '../article/article_01'
      },
      {
        "id": 1,
        "title": '中关村VR产业园落户石景山',
        "url": '../article/article_02'
      }
    ],
  },
  
  swiperChange: function (event) {
    this.setData({
      feed_idx: event.detail.current + 1
    })
  },
  
  // 跳转搜索页面
  toSearchPage: function () {
    wx.navigateTo({
      url: '../search/search'
    })
  }, 
  // 跳转滚动新闻文章页面
  toFeedsPageDetail: function (event) {
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: this.data.feedsData[id].url
    })
  },
  // 跳转区情概况、重点企业、投资政策页面
  toOutlinePage: function (event) {
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: this.data.outlineButtons[id].url
    })
  }, 
  // 跳转发展规划页面
  toPlanPage: function () {
    wx.navigateTo({
      url: '../plan/plan'
    })
  }, 
  // 跳转规划地图页面
  toMapPage: function () {
    this.setData({
      isMapClicked: true
    })
    wx.navigateTo({
      url: '../plan/map'
    })
  },
  // 跳转投资专题文章页面
  toSpecialPageDetail: function (event) {
    var id = event.currentTarget.dataset.id;
    var currentButton = this.data.specialButtons[id];
    this.data.specialButtons[id].isClicked = true;
    this.setData({
      specialButtons: this.data.specialButtons
    });
    setTimeout(function () {
      wx.navigateTo({
        url: currentButton.url
      })
    }, 100)
  }, 
  // 跳转重点项目页面
  toKeyPage: function () {
    wx.navigateTo({
      url: '../key/key'
    })
  }, 
  // 跳转重点项目文章页面
  toKeyPageDetail: function (event) {
    var id = event.currentTarget.dataset.id;
    var currentButton = this.data.keyButtons[id];
    this.data.keyButtons[id].isClicked = true;
    this.setData({
      keyButtons: this.data.keyButtons
    });
    setTimeout(function () {
      wx.navigateTo({
        url: currentButton.url
      })
    }, 100)
  },
  toKeyPageDetail2: function (event) {
    var id = event.currentTarget.dataset.id;
    var currentButton = this.data.keyButtons2[id];
    this.data.keyButtons2[id].isClicked = true;
    this.setData({
      keyButtons2: this.data.keyButtons2
    });
    setTimeout(function () {
      wx.navigateTo({
        url: currentButton.url
      })
    }, 100)
  },
  toKeyPageDetail3: function (event) {
    var id = event.currentTarget.dataset.id;
    var currentButton = this.data.keyButtons3[id];
    this.data.keyButtons3[id].isClicked = true;
    this.setData({
      keyButtons3: this.data.keyButtons3
    });
    setTimeout(function () {
      wx.navigateTo({
        url: currentButton.url
      })
    }, 100)
  }, 
  // 跳转投资咨询页面
  toConsultPage: function () {
    wx.navigateTo({
      url: '../consult/consult'
    })
  }, 
  // 跳转投资咨询文章页面
  toConsultPageDetail: function (event) {
    var id = event.currentTarget.dataset.id;
    var currentButton = this.data.consultTitle[id];
    this.data.consultTitle[id].isClicked = true;
    this.setData({
      consultTitle: this.data.consultTitle
    });
    setTimeout(function () {
      wx.navigateTo({
        url: currentButton.url
      })
    }, 100)
  }, 

  onShow: function () {
    for (var i = 0; i < this.data.specialButtons.length; i++) {
      this.data.specialButtons[i].isClicked = false;
    };
    this.setData({
      specialButtons: this.data.specialButtons
    });
    for (var i = 0; i < this.data.keyButtons.length; i++) {
      this.data.keyButtons[i].isClicked = false;
    };
    this.setData({
      keyButtons: this.data.keyButtons
    });
    for (var i = 0; i < this.data.keyButtons2.length; i++) {
      this.data.keyButtons2[i].isClicked = false;
    };
    this.setData({
      keyButtons2: this.data.keyButtons2
    });
    for (var i = 0; i < this.data.keyButtons3.length; i++) {
      this.data.keyButtons3[i].isClicked = false;
    };
    this.setData({
      keyButtons3: this.data.keyButtons3
    });
    for (var i = 0; i < this.data.consultTitle.length; i++) {
      this.data.consultTitle[i].isClicked = false;
    };    
    this.setData({
      consultTitle: this.data.consultTitle
    })
  },

  onLoad: function () {
    var that = this
    //获取滚动新闻条目数量
    this.setData({
      feed_len: this.data.feedsData.length
    })
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
