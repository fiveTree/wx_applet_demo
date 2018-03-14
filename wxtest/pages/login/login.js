// pages/login/login.js
Page({
  data:{
    name:"",
    pass:"",
    type:""
  },
 
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
   this.setData({
     type:options.type
   })
  },
  name:function(e){
    //console.log(e.detail.value)
    this.setData({
      name:e.detail.value
    })
  },
  pass:function(e){
    //console.log(e.detail.value)
    this.setData({
      pass:e.detail.value
    })
  },
  toHome:function(){
       wx.switchTab({
          url: './../home/home',
          success: function(res){
            // success
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })
  },
  login:function(){
    var that=this;
   //console.log("name",this.data.name)
   var name=this.data.name;
   var pass=this.data.pass;
   if(name==""){
        wx.showToast({
          title: '用户名不能为空',
          icon:"loading",
          duration: 3000
        })

        setTimeout(function(){
          wx.hideToast()
        },2000)
   }else if(pass==""){
      wx.showToast({
          title: '密码不能为空',
          icon:"loading",
          duration: 10000
        })

        setTimeout(function(){
          wx.hideToast()
        },2000)
   }else{
        wx.request({
          url: 'http://datainfo.duapp.com/shopdata/userinfo.php',
          data: {
              "userID":name,
              "password":pass,
              "status":"login"
          },
          method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          // header: {}, // 设置请求的 header
          success: function(res){
            // success
            if(res.data=="0"){
               wx.showToast({
                title: '用户名不存在',
                icon:"loading",
                duration: 10000
              })

              setTimeout(function(){
                wx.hideToast()
              },2000)
            }else if(res.data=="2"){
               wx.showToast({
                title: '用户名密码不符',
                icon:"loading",
                duration: 10000
              })

              setTimeout(function(){
                wx.hideToast()
              },2000)
            }else{
              wx.setStorage({
                  key:"userID",
                  data:name
                })
              wx.setStorage({
                key:"isLogin",
                data:"ok"
              })
              wx.showToast({
                title: '登陆成功',
                icon:"success",
                duration: 10000
              })

              setTimeout(function(){
                wx.hideToast()
              },2000)
              if(that.data.type=="cart"){
                  wx.switchTab({
                    url: './../cart/cart',
                    success: function(res){
                      // success
                    },
                    fail: function() {
                      // fail
                    },
                    complete: function() {
                      // complete
                    }
                  })
              }else if(that.data.type=="user"){
                    wx.switchTab({
                    url: './../user/user',
                    success: function(res){
                      // success
                    },
                    fail: function() {
                      // fail
                    },
                    complete: function() {
                      // complete
                    }
                  })
              }
            }
            

          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })
   }
 
  },
  toregister:function(){
     wx.navigateTo({
       url: './../register/register'
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