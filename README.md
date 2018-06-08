1，项目描述
  1)	此项目模仿的是到位
  2)	主要有首页，服务商，商家详情页
  3)	使用jQuery，artTemplate前端模板引擎等
  4)	后台使用express等
2, 实现的主要效果
   1) 头部
   2) 首页轮播图
   3) 分页
3，遇到的问题
   1) 轮播图中
      要将dom对象封装成jQuery对象
      $lis[num].removeClass('active')
      $($lis[num]).removeClass('active')
   2) 服务商页面布局中
      margin传递问题
        解决方案：
          1，为外层的div开启BFC
          2，为外层div加border或padding
