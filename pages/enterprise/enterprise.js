// pages/enterprise/enterprise.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    windowHeight: 0,
    toView: 'a',
    wordindex: ['a', 'b', 'c', 'd', 'e'],
    sectionLen: 0,
    enterprise: [
      {
        'id': 'a',
        'pid': 0,
        'title': '高新技术产业',
        'brands': [
          {
            "id": 0,
            "isClicked": false,
            "image": 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg',
            "url": '../enterprise/enterprise_02',
            "width": 330
          },
          {
            "id": 1,
            "isClicked": false,
            "image": 'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg',
            "url": '../enterprise/enterprise_02',
            "width": 330
          },
          {
            "id": 2,
            "isClicked": false,
            "image": 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg',
            "url": '../enterprise/enterprise_02',
            "width": 435
          },
          {
            "id": 3,
            "isClicked": false,
            "image": 'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg',
            "url": '../enterprise/enterprise_02',
            "width": 225
          },
          {
            "id": 4,
            "isClicked": false,
            "image": 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg',
            "url": '../enterprise/enterprise_02',
            "width": 225
          },
          {
            "id": 5,
            "isClicked": false,
            "image": 'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg',
            "url": '../enterprise/enterprise_02',
            "width": 435
          }
        ]
      },
      {
        'id': 'b',
        'pid': 1,
        'title': '旅游休闲产业',
        'brands': [
          {
            "id": 0,
            "isClicked": false,
            "image": 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg',
            "url": '../enterprise/enterprise_02',
            "width": 330
          },
          {
            "id": 1,
            "isClicked": false,
            "image": 'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg',
            "url": '../enterprise/enterprise_02',
            "width": 330
          },
          {
            "id": 2,
            "isClicked": false,
            "image": 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg',
            "url": '../enterprise/enterprise_02',
            "width": 435
          },
          {
            "id": 3,
            "isClicked": false,
            "image": 'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg',
            "url": '../enterprise/enterprise_02',
            "width": 225
          },
          {
            "id": 4,
            "isClicked": false,
            "image": 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg',
            "url": '../enterprise/enterprise_02',
            "width": 225
          },
          {
            "id": 5,
            "isClicked": false,
            "image": 'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg',
            "url": '../enterprise/enterprise_02',
            "width": 435
          }
        ]
      },
      {
        'id': 'c',
        'pid': 2,
        'title': '商业服务产业',
        'brands': [
          {
            "id": 0,
            "isClicked": false,
            "image": 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg',
            "url": '../enterprise/enterprise_02',
            "width": 330
          },
          {
            "id": 1,
            "isClicked": false,
            "image": 'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg',
            "url": '../enterprise/enterprise_02',
            "width": 330
          },
          {
            "id": 2,
            "isClicked": false,
            "image": 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg',
            "url": '../enterprise/enterprise_02',
            "width": 435
          },
          {
            "id": 3,
            "isClicked": false,
            "image": 'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg',
            "url": '../enterprise/enterprise_02',
            "width": 225
          },
          {
            "id": 4,
            "isClicked": false,
            "image": 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg',
            "url": '../enterprise/enterprise_02',
            "width": 225
          },
          {
            "id": 5,
            "isClicked": false,
            "image": 'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg',
            "url": '../enterprise/enterprise_02',
            "width": 435
          }
        ]
      },
      {
        'id': 'd',
        'pid': 3,
        'title': '文化创意产业',
        'brands': [
          {
            "id": 0,
            "isClicked": false,
            "image": 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg',
            "url": '../enterprise/enterprise_02',
            "width": 330
          },
          {
            "id": 1,
            "isClicked": false,
            "image": 'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg',
            "url": '../enterprise/enterprise_02',
            "width": 330
          },
          {
            "id": 2,
            "isClicked": false,
            "image": 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg',
            "url": '../enterprise/enterprise_02',
            "width": 435
          },
          {
            "id": 3,
            "isClicked": false,
            "image": 'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg',
            "url": '../enterprise/enterprise_02',
            "width": 225
          },
          {
            "id": 4,
            "isClicked": false,
            "image": 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg',
            "url": '../enterprise/enterprise_02',
            "width": 225
          },
          {
            "id": 5,
            "isClicked": false,
            "image": 'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg',
            "url": '../enterprise/enterprise_02',
            "width": 435
          }
        ]
      },
      {
        'id': 'e',
        'pid': 4,
        'title': '现代金融产业',
        'brands': [
          {
            "id": 0,
            "isClicked": false,
            "image": 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg',
            "url": '../enterprise/enterprise_02',
            "width": 330
          },
          {
            "id": 1,
            "isClicked": false,
            "image": 'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg',
            "url": '../enterprise/enterprise_02',
            "width": 330
          },
          {
            "id": 2,
            "isClicked": false,
            "image": 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg',
            "url": '../enterprise/enterprise_02',
            "width": 435
          },
          {
            "id": 3,
            "isClicked": false,
            "image": 'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg',
            "url": '../enterprise/enterprise_02',
            "width": 225
          },
          {
            "id": 4,
            "isClicked": false,
            "image": 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg',
            "url": '../enterprise/enterprise_02',
            "width": 225
          },
          {
            "id": 5,
            "isClicked": false,
            "image": 'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg',
            "url": '../enterprise/enterprise_02',
            "width": 435
          }
        ]
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this
    that.setData({
      sectionLen: that.data.wordindex.length
    })
    wx.getSystemInfo({
      success: function (res) {
        var wHeight = res.windowHeight;
        that.setData({
          windowHeight: wHeight
        });
      }
    })
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
    for (var i = 0; i < this.data.enterprise.length; i++) {
      for (var j = 0; j < this.data.enterprise[i].brands.length; j++) {
        this.data.enterprise[i].brands[j].isClicked = false;
      }
    };
    this.setData({
      enterprise: this.data.enterprise
    });
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

  // scroll: function(event) {
  //   var maxIndex = this.data.sectionLen - 1; // 页面内共有多少组企业模块
  //   var deltaY = event.detail.deltaY; // 竖向滑动距离
  //   var wordindex = this.data.wordindex; // 所有企业标识list
  //   var currentView = this.data.toView; // 目前所在的企业区域的标识
  //   var index = wordindex.indexOf(currentView); // 目前所在企业区域标识数组的index

  //   if (deltaY < -5) {
  //     var target = (index == maxIndex) ? maxIndex : (index+1);
  //   } 
  //   else if (deltaY > 5) {
  //     var target = (index == 0) ? 0 : (index-1);

  //   }
  // },

  scrollupdown: function(diff) {
    var maxIndex = this.data.sectionLen - 1; // 页面内共有多少组企业模块
    var wordindex = this.data.wordindex; // 所有企业标识list
    var currentView = this.data.toView; // 目前所在的企业区域的标识
    var index = wordindex.indexOf(currentView); // 目前所在企业区域标识数组的index

    if (diff > 0) {
      console.log('you are scrolling down...');
      var target = (index == maxIndex) ? maxIndex : (index + 1);
      this.setData({
        toView: wordindex[target]
      })
      console.log('now you are at ' + this.data.toView);
    } else {
      console.log('you are scrolling up...');
      var target = (index == 0) ? 0 : (index - 1);
      this.setData({
        toView: wordindex[target]
      })
      console.log('now you are at ' + this.data.toView);
    }
  },

  touchstart: function(event) {
    console.log('start');
    console.log(event.changedTouches);
    this.setData({
      startPosition: event.changedTouches[0].clientY
    })
  },

  touchend: function(event) {
    var start = this.data.startPosition;
    console.log('end');
    console.log(event.changedTouches);

    var end = event.changedTouches[0].clientY;
    var diff = start - end;
    this.scrollupdown(diff);
  },

  toEnterprisePageDetail: function (event) {
    var pid = event.currentTarget.dataset.pid;
    var cid = event.currentTarget.dataset.cid;
    var currentButton = this.data.enterprise[pid].brands[cid];
    console.log(currentButton)
    this.data.enterprise[pid].brands[cid].isClicked = true;
    this.setData({
      enterprise: this.data.enterprise
    });
    setTimeout(function () {
      wx.navigateTo({
        url: currentButton.url
      })
    }, 100)
  },
})