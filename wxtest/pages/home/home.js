
Page({
  data:{
    indicatorDots: true,
    indicatorDots1: false,
    autoplay: true,
    autoplay1: false,
    interval: 3000,
    duration: 500,
    circular:true,
    circular1:false,
    currentIndex:0,
    bannerList:"",
    img1:"",
    img2:"",
    img3:"",
    twitter1:"",
    twitter2:"",
    twitter3:"",
    goods1:"",
    goods2:"",
    goods3:""
  }, 
  toDetail:function(e){
      var goodsID=e.currentTarget.dataset.goodsid;
      wx.navigateTo({
        url: './../detail/detail?goodsID='+goodsID,
      })
  },
  changeIndex:function(event){
    let index = event.target.dataset.index;
    console.log(index)
    this.setData({
      currentIndex:index
    })
  },
  changeItem:function(event){
     console.log(event.detail)
   // event.detail = {current: current}
    //console.log(this.data.current)
    this.setData({
      currentIndex:event.detail.current
    })
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that=this;
    wx.request({
      url: 'https://siqiang/sylb.json',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        console.log(res.data.list)
       that.setData({
          bannerList:res.data.list
       })
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    });
    wx.request({
      url: 'https://siqiang/data1.json',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
      // console.log("11",res.data.list[0].image.pic_url)
       that.setData({
           img1:res.data.list[0].image.pic_url,
           img2:res.data.list[1].image.pic_url,
           img3:res.data.list[2].image.pic_url,
           twitter1:res.data.list[0].twitters,
           twitter2:res.data.list[1].twitters,
           twitter3:res.data.list[2].twitters
       })
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    });
    wx.request({
      url: 'https://siqiang/goods1.json',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        //console.log("222",res.data)
        that.setData({
          "goods1":res.data.list
        })
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    });
      wx.request({
      url: 'https://siqiang/goods2.json',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        //console.log("222",res.data)
        that.setData({
          "goods2":res.data.list
        })
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    });
      wx.request({
      url: 'https://siqiang/goods3.json',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        //console.log("222",res.data)
        that.setData({
          "goods3":res.data.list
        })
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})