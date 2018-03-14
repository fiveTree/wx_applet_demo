// pages/detail/detail.js
Page({
  data: {
    indicatorDots: true,
    indicatorDots1: false,
    autoplay: false,
    autoplay1: false,
    interval: 3000,
    duration: 500,
    circular1: false,
    currentIndex: 0,
    circular: true,
    bannerList: "",
    index: "1",
    itemInfoTitle: "",
    itemInfoDesc: "",
    itemInfoHighNowPrice: "",
    itemInfoHighPrice: "",
    itemInfoDiscountDesc: "",
    columns: "",
    shopInfo: "",
    score: "",
    services: "",
    desc: "",
    detailImage_list: "",
    rule: "",
    sets: "",
    rate: "",
    cRate: "",
    createdDate:""
  },
  changeIndex: function (event) {
    let index = event.target.dataset.index;
    console.log(index)
    this.setData({
      currentIndex: index
    })
  },
  changeItem: function (event) {
    console.log(event.detail)
    // event.detail = {current: current}
    //console.log(this.data.current)
    this.setData({
      currentIndex: event.detail.current
    })
  },
  changepage: function (e) {
    //console.log("222",e.detail.current)
    var index = e.detail.current + 1;
    this.setData({
      index: index
    })
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    console.log(options.goodsID)

    var that = this;
    wx.request({
      url: "https://siqiang/" + options.goodsID + ".json",
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success
        var data = res.data;
        //转换日期
        let date = new Date();
        let len = data.result.rate.list.length;
        console.log(len);
        console.log(date.getTime());
        for (let i = 0; i < len; i++) {
          let createdTime = data.result.rate.list[i].created;
          let createdDate = date.getTime() - createdTime;
          let time = new Date(createdDate);
          let y = time.getFullYear();//年
          let m = time.getMonth() + 1;//月
          let d = time.getDate();//日
          /*let h = time.getHours();//时
          let mm = time.getMinutes();//分
          let s = time.getSeconds();//秒*/
          //alert(y+"-"+m+"-"+d+" "+h+":"+mm+":"+s)
          data.result.rate.list[i].createdDate = y + "-" + m + "-" + d

        }

        //console.log(data)
        //console.log("11",res.data.result.rate.list)
        that.setData({
          bannerList: data.result.itemInfo.topImages,
          itemInfoTitle: data.result.itemInfo.title,
          itemInfoDesc: data.result.itemInfo.desc,
          itemInfoHighNowPrice: data.result.itemInfo.highNowPrice,
          itemInfoHighPrice: data.result.itemInfo.highPrice,
          itemInfoDiscountDesc: data.result.itemInfo.discountDesc,
          columns: data.result.columns,
          shopInfo: { "shopimg": data.result.shopInfo.shopLogo, "shopname": data.result.shopInfo.name, "cGoods": data.result.shopInfo.cGoods, "cSells": data.result.shopInfo.cSells },
          score: data.result.shopInfo.score,
          services: data.result.shopInfo.services,
          desc: data.result.detailInfo.desc,
          detailImage_list: data.result.detailInfo.detailImage,
          rule: data.result.itemParams.rule,
          sets: data.result.itemParams.info.set,
          rate: data.result.rate.list,
          cRate: data.result.rate.cRate
        })
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    });
    wx.request({
      url: 'https://siqiang/goods1.json',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success
        //console.log("222",res.data)
        that.setData({
          "goods1": res.data.list
        })
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    });
    wx.request({
      url: 'https://siqiang/goods2.json',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success
        //console.log("222",res.data)
        that.setData({
          "goods2": res.data.list
        })
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    });
    wx.request({
      url: 'https://siqiang/goods3.json',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success
        //console.log("222",res.data)
        that.setData({
          "goods3": res.data.list
        })
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})