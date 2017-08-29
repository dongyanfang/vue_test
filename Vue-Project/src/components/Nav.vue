<template>
  <!--logo 个人中心 商城首页 账户设置-->
  <nav class="navbar navbar-default hidden-xs">
    <div class="container-fluid nav_bg">
      <div class="nav_main">
        <div class="navbar-header hidden-sm">
          <span class="navbar_logo">logo</span>
          <a class="navbar-brand navbar_brand" href="#">欢迎登录</a>
        </div>
        <div>
          <ul class="nav navbar-nav navbar_nav">
            <li><router-link to="/"><i class="per_ico"></i>个人中心</router-link></li>
            <li><a><i class="shop_ico"></i>商品首页</a></li>
            <li class="dropdown">
              <a>
                <i class="set_ico"></i>
                账户设置
              </a>
            </li>
          </ul>
        </div>
        <div class="search_main">
          <div class="input-group input_group">
            <input type="text" class="form-control form_control"placeholder="吹风机">
            <span class="input-group-btn">
                 <button class="btn btn_search">搜索</button>
              </span>
          </div>
          <div class="input-group input_group ig_shopping">
            <input type="text" class="form-control form_control fc_shopping"placeholder="我的购物车">
            <span>5</span>
          </div>
        </div>
      </div>
    </div>
  </nav>

</template>

<script>
  import Vue from 'vue'
  Vue.http.get('static/index.json').then(
    function (res) {
      // 处理成功的结果
      console.log(res.bodyText);
    },function (res) {
      // 处理失败的结果
    }
  );
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navbar{margin-bottom:0px;}
  .nav_bg{
    background:#e45050;
    min-height:5rem;
  }
  .nav_main{
    margin:0 auto;
    max-width:1200px;
  }
  .navbar_brand{
    color:#fff;
    padding-top:2rem;
  }
  .navbar_brand:hover{
    color:#fff;
  }
  .navbar_logo{
    float:left;
    margin-top:1rem;
    height:3rem;
    line-height:3rem;
    text-align:center;
    width:6rem;
    background:#fff;
    border-radius:3rem/1.5rem;
    -moz-border-radius:3rem/1.5rem;
    -webkit-border-radius:3rem/1.5rem;
    margin-right:10px;
  }
  .navbar_nav{
    padding-top:0.9rem;
  }
  @media only screen and (min-width: 768px){
    .navbar_nav{
      padding-top:1.4rem;
    }
  }
  .navbar_nav a i{
    display: inline-block;
    height:30px;
    float:left;
    margin-top:-0.45rem;
    width:30px;
    margin-right:0.2rem;
    opacity: 0.8;
  }
  .navbar_nav .actived i{
    opacity: 1;
  }
  .navbar_nav .per_ico{
    background:url("../assets/img/ico_img.png") no-repeat -3px -5px;
  }
  .navbar_nav .shop_ico{
    background:url("../assets/img/ico_img.png") no-repeat -3px -44px;
  }
  .navbar_nav .set_ico{
    background:url("../assets/img/ico_img.png") no-repeat -3px -78px;
  }
  .navbar_nav a{
    color:#ffafaf;
    font-size: 0.8rem;
  }
  .navbar_nav a:hover{
    color:#fff !important;
  }
  .dropdown-menu a:hover{
    color:#e45050 !important;
  }
  .navbar_nav a:focus{
    background: none;
    color:#FFF;
  }
  .navbar-default .navbar-nav>li>a{
    color:#fff;
  }
  .actived{
    color:#fff !important;
  }
  .btn_search{
    font-size: 0.6rem;
    height:34px;
    color:#333;
    background: #e2e2e2;
    border-radius: 0px;
  }
  .btn_search:active{
    border:none;
  }
  .form_control{
    border-radius: 0px !important;
  }
  .form_control:focus{
    border:1px solid transparent;
    box-shadow: none;
  }

  .input_group{
    float:left;
    width:165px;
  }
  .search_main{
    float: right;
    margin-top:1.1rem;
  }
  .ig_shopping{
    margin:0px 20px 0 20px;
    width:140px;
    position: relative;
  }
  .fc_shopping{
    text-indent:28px;
    background:#fff url("../assets/img/ico_img.png") no-repeat 0px -112px;
  }

  .ig_shopping span{
    position: absolute;
    right:0.2rem;
    top:0.1rem;
    padding:0 0.4rem;
    display: inline-block;
    height:0.8rem;
    line-height: 0.8rem;
    font-size: 0.5rem;
    background: #ff0000;
    border-radius: 6px;
    color:#fff;
    z-index: 999;
  }
  .app_nav{
    position: fixed;
    bottom:0px;
    z-index: 10;
    background: #fff;
    width:100%;
    color:#ff0000;
    padding:5px 0;
  }
  .app_nav li{
    text-align: center;
    display: inline-block;
    width:30%;
  }

</style>
