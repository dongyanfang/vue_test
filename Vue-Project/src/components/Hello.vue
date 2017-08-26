<template>
  <div class="main_left">
    <div class="personal_page_main">
      <div class="personal_page_header ">
        <div class="page_header col-sm-6 col-md-4 col-lg-3 col-xs-12">
          <dl>
            <dt><img src="../assets/img/no_header.jpg"></dt>
            <dd>会员：<span>TMAC</span></dd>
            <dd class="id">ID：PC5656565</dd>
            <dd class="m">我的积分红包<span> 600 </span>个</dd>
            <dd class="p">我的积分<span> 8000 </span></dd>
          </dl>
        </div>
        <div class="page_state col-sm-6 col-md-5 col-lg-4 col-xs-12">
          <ul>
            <li><i></i><p>待付款</p><span>2</span></li>
            <li><i></i><p>待收货</p><span>2</span></li>
            <li><i></i><p>待评价</p><span>2</span></li>
          </ul>
        </div>
        <div class="yes_income col-sm-12 col-md-3 col-lg-5 col-xs-12">
          <h2>昨日收益<span class="hidden-md">（积分红包越多，收益越多！）</span></h2>
          <div class="income_main">
            <p>6.5系列</p>
            <div class="per_main">
              <p class="per_income"><span></span></p>
              <span>20个</span>
            </div>
          </div>
          <div class="income_main">
            <p>6.5系列</p>
            <div class="per_main">
              <p class="per_income"><span></span></p>
              <span>20个</span>
            </div>
          </div>
        </div>
      </div>
      <div class="wealth_main col-sm-12 col-md-12 col-lg-12 col-xs-12">
        <div class="wealth_header col-sm-2 col-md-2 col-lg-2 col-xs-12">
          <p>个人财富</p>
          <img src="../assets/img/wealth_ico.png">
        </div>
        <div class="wealth_body col-sm-5 col-md-5 col-lg-5 col-xs-12">
          <dl>
            <dt><img src="../assets/img/wealth-ico1.png"></dt>
            <dd><p>昨日消费返回积分</p><span>540.632</span></dd>
          </dl>
        </div>
        <div class="wealth_body col-sm-5 col-md-5 col-lg-5 col-xs-12">
          <dl>
            <dt><img src="../assets/img/wealth-ico2.png"></dt>
            <dd><p>推荐得佣金<span>（累计）</span></p><span>540.632</span></dd>
          </dl>
        </div>
      </div>
      <div class="referral_link col-sm-12 col-md-12 col-lg-12 col-xs-12">
        <div class="qr">
          <p>二维码</p>
        </div>
        <h2>推广链接</h2>
        <ul>
          <li>我的推广ID</li>
          <li>4654531356</li>
          <li>为什么要推荐会员注册？</li>
        </ul>
        <div class="link">
          <span>我的推广链接</span>
          <p>https://www.dsh18.com/reg?code=l%2FhCjCz7sGoch94tFb1521313D%3D</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main_left{
    width:77%;
    float: left;
  }
  .personal_page_main{
  }
  .personal_page_header{
    min-height: 240px;
  }
  .page_header{
    padding: 1rem 0;
    border-right:1px dashed #f5f5f5;
    min-height: 205px;
    background:url("../assets/img/personal_bg1.png");
    background-size: 100% 100%;
    float: left;
    width:28%;
  }
  .page_header dl{
    margin-top: 38px;
    min-height: 92px;
  }
  .page_header dl dt{
    min-height: 5.5rem;
    width: 4.5rem;
  }
  .page_header dl dt img{
    height:3.5rem;
    width: 3.5rem;
    margin:0.5rem;
    margin-top:0.3rem;
    border-radius: 50%;
    border: 2px solid #ddd;
  }
  .page_header dl dd{
    font-size: 0.6rem;
    color:#333;
    width:54%;
    line-height: 1.8;
    font-weight: normal;
  }
  .page_header dl .id{
    color:#222;
  }
  .page_header dl .m span{
    color:#005ea7;
  }
  .page_header dl .p span{
    color:#ff0000;
  }
  .page_header dl dd span{
    color:#222;
    font-size: 0.65rem;
    font-weight: bold;
  }
  .page_header dl dd,.page_header dl dt{
    display: inline-block;
    float: left;
  }
  .page_state{
    padding-top:0.5rem;
    border-right:1px dashed #f5f5f5;
    min-height: 222px;
    background:url("../assets/img/personal_bg2.png");
    background-size: 100% 100%;
    float: left;
    width:33%;
  }
  .page_state ul{
    height: 100px;
    margin-top: 40px;
  }
  .page_state ul li{
    width:33%;
    float: left;
    text-align: center;
  }
  .page_state ul li i{
    display: inline-block;
    height:56px;
    width:56px;
    background: #c0dcec url("../assets/img/slider_bg.png") no-repeat 5px -200px;
    border-radius: 50%;
  }
  .page_state ul li:nth-child(2) i{
    background: #c0dcec url("../assets/img/slider_bg.png") no-repeat -50px -200px;
  }
  .page_state ul li:nth-child(3) i{
    background: #c0dcec url("../assets/img/slider_bg.png") no-repeat 0px -250px;
  }
  .page_state ul li p{
    margin-bottom: 0px;
    line-height: 1.2;
  }
  .page_state ul li span{
    font-weight: bold;
    color:#ff0000;
  }
  .yes_income{
    padding: 2rem 0 1.15rem 1rem;
    min-height:190px;
    background:url("../assets/img/personal_bg3.png");
    background-size: 100% 100%;
    float: left;
    width:36%;
  }
  .yes_income h2 {
    font-size: 0.9rem;
    margin-top:0px;
    color:#333;
    font-weight: bold;
  }
  .yes_income h2 span{
    font-size: 0.5rem;
    color:#666;
  }
  .yes_income p{
    margin-bottom: 0px;

  }
  .yes_income span{
    color:#333;
  }
  .per_main{
    width:100%;
    height:1.2rem;
  }
  .per_income{
    display: inline-block;
    height:1.2rem;
    width:70%;
    float: left;
    margin-right:0.5rem;
    background: #d9d9d9;
  }
  .income_main{
    margin-top:10px;
  }
  .per_income span{
    width:90%;
    height:1.2rem;
    display: inline-block;
    background:#71b247;
  }
  .wealth_main{
    clear:both;
    padding:0;
    background:#fff;
    margin-top:1rem;
  }
  .wealth_main .wealth_header{
    height: 85px;
    width: 64px;
    border-radius:0 0 48% 48%;
    background: #e45050;
    color:#fff;
    float: left;
    text-align: center;
    margin-top:-5px;
    padding:0;
    padding-top:0.8rem;
  }
  .wealth_main .wealth_header p{
    font-size: 0.5rem;
  }
  .wealth_main .wealth_header img{
    height:1rem;
    width:1rem;
  }
  .wealth_body{
    text-align: center;
    padding-top:1rem;
  }
  .wealth_body+.wealth_body{
    border-left:1px solid #f5f5f5;
  }
  .wealth_body dt,.wealth_body dd{
    display: inline-block;
  }
  .wealth_body dd{
    text-align: left;
    margin-top:10px;
    padding-left:10px;
  }
  .wealth_body dd p{
    color:#000;
    font-weight: bold;
  }
  .wealth_body dd p span{
    color:#666;
  }
  .wealth_body dd span{
    color:#ff0000;
    font-weight: bold;
  }
  .referral_link{
    background:#e6e6e6;
    color:#666;
    margin-top:1rem;
    border: 10px solid #fff;
  }
  .referral_link h2{
    color:#000;
    font-size: 0.9rem;
    font-weight: bold;
  }
  .referral_link ul li{
    display: inline-block;
    padding:0.2rem 2rem 0.2rem 0;
  }
  .referral_link .link p{
    display: inline-block;
    padding:0.2rem;
    background: #fff;
    word-wrap: break-word;
    word-break:break-all;
  }
  .referral_link .link span{
    margin-right:1rem;
  }
  .referral_link .qr{
    height:90px;
    width:90px;
    line-height:90px;
    text-align: center;
    font-size: 1rem;
    color: #000;
    float: right;
    margin-top:1rem;
    background: #fff;
  }
  @media screen and (max-width:768px){
    .page_state,.page_header,.yes_income{
      background: #fff;
    }
  }
  @media screen and (max-width: 736px){
    .page_state,.yes_income{
      background: #fff;
      min-height: 130px;
    }
    .page_header{
      min-height: 115px;
      background: #fff;
      padding:0px;

    }
    .page_header dl{
      margin-top: 20px;
    }
    .page_state ul{
      margin-top:0px;
    }
    .yes_income{
      padding-top:1rem;
    }
  }

</style>
