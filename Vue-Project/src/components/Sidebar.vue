<template>
  <div class="slider_main hidden-xs">
    <div class="panel-group slider" id="accordion" role="tablist" aria-multiselectable="true">
      <div class="panel panel-default">
        <div class="panel-heading" role="tab" id="headingOne">
          <h1 role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
            <a class="slider_h1 panel-title" >
              <i></i>订单管理<span></span>
            </a>
          </h1>

        </div>
        <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
          <div class="panel-body">
            <ul>
              <li><i></i><router-link to="/myOrder">我的订单</router-link></li>
              <li><i></i><a>订单评价</a></li>
              <li><i></i><a>收银订单</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="panel panel-default slider wealth">
        <div class="panel-heading" role="tab" id="headingTwo">
          <h1 role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <a class="slider_h1 panel-title" >
              <i></i>我的财富<span></span>
            </a>
          </h1>

        </div>
        <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
          <div class="panel-body">
            <ul>
              <li><i></i><a>我的积分红包</a></li>
              <li><i></i><a>我的积分</a></li>
              <li><i></i><a>我的佣金</a></li>
              <li><i></i><a>佣金回购</a></li>
              <li><i></i><a>回购记录</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="panel panel-default present slider">
        <div class="panel-heading" role="tab" id="headingThree">
          <h1 role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <a class="slider_h1 panel-title" >
              <i></i>转赠/获赠<span></span>
            </a>
          </h1>
        </div>
        <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
          <div class="panel-body">
            <ul>
              <li><i></i><a>我要转赠</a></li>
              <li><i></i><a>转赠记录</a></li>
              <li><i></i><a>获赠记录</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="panel panel-default slider recommend">
        <div class="panel-heading" role="tab" id="headingFour">
          <h1 role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            <a class="slider_h1 panel-title" >
              <i></i>推荐<span></span>
            </a>
          </h1>
        </div>
        <div id="collapseFour" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
          <div class="panel-body">
            <ul>
              <li><i></i><a>推荐历史</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="panel panel-default slider collection">
        <div class="panel-heading" role="tab" id="headingFive">
          <h1 role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
            <a class="slider_h1 panel-title" >
              <i></i>收藏<span></span>
            </a>
          </h1>
        </div>
        <div id="collapseFive" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
          <div class="panel-body">
            <ul>
              <li><i></i><a>商品收藏</a></li>
            </ul>
          </div>
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
  .slider_main{
    width:252px;
    float: left;
    margin-right:20px;
  }
  .slider{
    width:252px;
  //height:240px;
    clear:both;
    float: left;
    margin-right:20px;
  }
  .slider .slider_h1{
    display: block;
    height:54px;
    background: #fff;
    color:#333;
    display: inline-block;
    line-height: 60px;
    width:250px;
    font-size:0.7rem;
    font-weight:bold;
    letter-spacing: 2px;
    margin:0px;
  }
  .slider .slider_active{
    color:#fff;
    background:#e45050;
  }
  .slider .slider_h1 i{
    display: inline-block;
    height:40px;
    width:40px;
    float: left;
    margin:13px 15px 0 10px;
    background: url("../assets/img/slider_bg.png") no-repeat -43px -8px;
  }
  .slider .slider_active i{
    background: url("../assets/img/slider_bg.png") no-repeat -3px -8px;
  }
  .slider .slider_h1 span{
    display: inline-block;
    height:20px;
    width:25px;
    float: right;
    cursor: pointer;
    margin:20px 20px 0 0;
    background:url("../assets/img/slider_bg.png") no-repeat -65px -272px;
  }
  .slider .slider_active span{
    background:url("../assets/img/ico_img.png") no-repeat -40px -65px;
  }
  .slider ul{
    -webkit-padding-start:0px;
    -moz-padding-start:0px;
    -o-padding-start:0px;
    width:250px;
    padding:10px 0;
    border: none;
  //border-top: 1px solid #dedede;
  }
  .slider ul li{
    height:35px;
    width:248px;
    text-indent:75px;
    line-height: 35px;
    position: relative;
  }
  .slider ul li i{
    display:inline-block;
    height:28px;
    width:20px;
    position:absolute;
    top:7px;
    left:45px;
    background:url("../assets/img/ico_img.png") no-repeat -42px -90px;
  }
  .slider ul li a{
    color:#333;
  }
  .slider ul li .active{
    color:#e45050;
  }
  .slider{
    border-bottom:none;
  }
  .slider_main{
    float: left;
  }
  .slider ul{
    border-bottom: none;
  }
  .wealth .slider_h1 i{
    background:url("../assets/img/slider_bg.png") no-repeat -48px -48px !important;
  }
  .wealth .slider_active i{
    background:url("../assets/img/slider_bg.png") no-repeat -8px -48px !important;
  }
  .present .slider_h1 i{
    background:url("../assets/img/slider_bg.png") no-repeat -50px -88px !important;
  }
  .present .slider_active i{
    background:url("../assets/img/slider_bg.png") no-repeat -8px -88px !important;
  }
  .recommend .slider_h1 i{

    background:url("../assets/img/slider_bg.png") no-repeat -52px -128px !important;

  }
  .recommend .slider_active i{
    background:url("../assets/img/slider_bg.png") no-repeat -8px -128px !important;
  }
  .collection .slider_h1 i{
    background:url("../assets/img/slider_bg.png") no-repeat -52px -165px !important;
  }
  .collection .slider_active i{
    background:url("../assets/img/slider_bg.png") no-repeat -8px -165px !important;
  }
  .collection .slider_h1{
  }
  .collection ul{
    border-top:none;
  }
  .panel-heading{
    padding:0px;
  }
  .panel-body{
    padding:0px;
  }
  .panel{
    border-bottom:none;
  }
  .panel-group .panel{
    border-radius: 0px;
  }
  .panel-group .panel + .panel{
    margin:0px;
  }
  h1 {
    padding: 0px;
    margin: 0px;
  }
  .panel{
    border:1px solid #eee;

  }
  .panel+.panel{
    border-top:none;
  }
  li{
    list-style-type: none;
  }
</style>
