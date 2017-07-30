// pages/news/news.js
var app = getApp()
Page({
  data: {
    isChannelFolded: false,
    imageWidth: 100,

    channelButtons: [
      {
        "id": 0,
        "title": "区域规划",
        "image": '../../images/icon_small_project.png'
      },
      {
        "id": 1,
        "title": "投资项目",
        "image": '../../images/icon_small_news.png'
      },
      {
        "id": 2,
        "title": "侨梦苑",
        "image": '../../images/icon_small_qiaomengyuan.png'
      },
      {
        "id": 3,
        "title": "冬奥城市",
        "image": '../../images/icon_small_olympics.png'
      },     
      {
        "id": 4,
        "title": "疏解提升",
        "image": '../../images/icon_small_dispersal.png'
      },
      {
        "id": 5,
        "title": "政策申报",
        "image": '../../images/icon_small_policy.png'
      },
      {
        "id": 6,
        "title": "企业助手",
        "image": '../../images/icon_small_assistant.png'
      },
      {
        "id": 7,
        "title": "趣说财经",
        "image": '../../images/icon_small_finance.png'
      },
      {
        "id": 8,
        "title": "历史文化",
        "image": '../../images/icon_small_history.png'
      },
      {
        "id": 9,
        "title": "校园味道",
        "image": '../../images/icon_small_campus.png'
      }
    ],
    slideData: [
      {
        "id": 0,
        "title": "石景山好风景石景山好风景石景山好风景石景山好风景石景山好风景",
        "image": 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg', 
        "url": '../article/article_01'
      },
      {
        "id": 1,
        "title": "213123石景山好风景石景山好风景石景山好风景",
        "image": 'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg',
        "url": '../article/article_02' 
      },
      {
        "id": 2,
        "title": "341石景山好风景石景山好风景石景山好风景石景山好风景石景山好风景",
        "image": 'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg',
        "url": '../article/article_01' 
      },
      {
        "id": 3,
        "title": "石景山342山好风景石景山好风景石景山好风景石景山好风景",
        "image": '../../images/bg.jpg',
        "url": '../article/article_02' 
      }
    ],
    articleData: [
      {
        "id": 0,
        "title": "中关村虚拟现实产业园在石景山启动（附规划和政策）",
        "image": [
          '../../images/logo.jpg',
          '../../images/bg.jpg'
        ],
        "url": '../article/article_01',
        "numImage": 2  
      },
      {
        "id": 1,
        "title": "3424中关村虚拟现实产业园在石景山启动（附规划和政策）",
        "image": [
          '../../images/logo.jpg',
          '../../images/bg.jpg',
          '../../images/logo.jpg'
        ],
        "url": '../article/article_02',
        "numImage": 3
      },
      {
        "id": 2,
        "title": "111中关村虚拟现实产业园在石景山启动（附规划和政策）",
        "image": [
          '../../images/logo.jpg'
        ],
        "url": '../article/article_01',
        "numImage": 1
      }
    ]
  },

  // adjustImage: function (e) {
  //   var id = e.currentTarget.dataset.id;
  //   var image_ = this.data.articleData;
  //   // this.setData({
  //   //   imageWidth: 700 / image_.length
  //   // })
  //   console.log(id)
  // },

  // 跳转幻灯轮播文章页面
  toSlidePageDetail: function (event) {
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: this.data.slideData[id].url
    })
  }, 
  // 跳转新闻消息文章页面
  toArticlePageDetail: function (event) {
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: this.data.articleData[id].url
    })
  },

  onLoad: function () {
  }
}) 