<template>
  <div class="detail_main">
    <div class="main_info">
      <h1>订单详情</h1>
      <div class="order_header">

        <ul>
          <li class="order_state">
            <p>生成订单</p>
            <img src="../assets/img/no_state.png">
            <span>17-02-13 12:18:08</span>
          </li><li class="order_state">
          <p>完成付款</p>
          <img src="../assets/img/no_state.png">
          <span>17-02-13 12:18:08</span>
        </li><li class="order_state">
          <p>商家发货</p>
          <img src="../assets/img/no_state.png">
          <span>17-02-13 12:18:08</span>
        </li><li class="order_state">
          <p>确认发货</p>
          <img src="../assets/img/no_state.png">
          <span>17-02-13 12:18:08</span>
        </li><li class="order_state">
          <p class="active">完成订单</p>
          <img src="../assets/img/has_state.png">
          <span>17-02-13 12:18:08</span>
        </li>
        </ul>
        <div class="line"></div>
      </div>
      <div class="order_address col-sm-6 col-md-6 col-lg-6 col-xs-12">
        <h2>订单信息</h2>
        <ul>
          <li><span class="lable">收货人地址：</span><p>小白，江西省南昌市井岗山大道288号世纪欧美中心2118</p></li>
          <li><span class="lable">卖家留言：</span><p>记得级卡的打卡机的d凯迪拉克电缆看打开手机啊</p></li>
          <li><span class="lable">发 　票：</span><p>不开发票</p></li>
          <li><span class="lable">订单编号：</span><p>122121212</p></li>
          <li><span class="lable">商 　家：</span><p>家乐福井岗山大道店</p></li>
        </ul>
      </div>
      <div class="order_status  col-sm-6 col-md-6 col-lg-6 col-xs-12">
        <p>订单状态:<span>交易成功</span></p>
        <span>于2017-06-28 15:32:20下单成功</span>
      </div>
      <div>
        <table class="table">
          <thead>
          <tr><th></th><th>商品</th><th>单价</th><th>数量</th><th>交易状态</th><th>支付状态</th></tr>
          </thead>
          <tbody>
          <tr><td><img src="../assets/img/no_header.jpg"></td><td>奥利奥饼干</td><td>3000</td><td>1</td><td>已完成</td><td>已完成</td></tr>
          </tbody>
        </table>
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
  .detail_main{
    float: left;
    width:76%;
  }
  .main_info{
    background: #f5f5f5;
  }
  .order_header{
    width:90%;
    margin-top:2rem;
    height:9rem;
    margin-left:5%;
  }
  .order_header{
    position: relative;
  }
  .order_header ul{
    position: absolute;
    width:100%;
  }
  .order_state{
    width:20%;
    display: inline-block;
    text-align: center;
    position: relative;
  }
  .order_state p{
    width:100%;
    line-height: 0.9rem;
    font-size: 14px;

  }
  .order_state span{
    display: inline-block;
    width:100%;
    line-height: 1.5;
    font-size: 14px;
    margin-top:1rem;
  }
  .order_state img{
    width:4rem;
    height:4rem;
  }
  .line{
    width:80%;
    height:0.8rem;
    background: #e6e6e6;
    position: absolute;
    margin-top:2.4rem;
    margin-left:8%;
  }

  .order_state .active{
    color:#007ec7;
  }
  .order_address{
    font-size: 14px;
    background: #fff;
    border:1px solid #ddd;
    margin:1rem 0;
  }
  .order_address h2{
    width:100%;
    height:2.5rem;
    line-height: 2.5rem;
    font-size: 16px;
    text-align: center;
    background: #e45050;
    color:#fff;
    margin:0px;
  }
  .order_address,.order_status{
    padding:0px;
  }
  .order_status{
    border: 1px solid #e45050;
    margin-top:1rem;
    padding:7.2rem 1rem;
    background: #fff;
  }
  .order_address ul{
    padding:1rem;
  }
  .order_address ul li{
    line-height:2;
    padding:1.2rem 0;
  }
  .order_address .lable{
    color:#333;
    float: left;
    min-width:23%;
    text-align: center;
    font-weight: bold;
  }
  .order_address p{
    float: left;
    width:70%;
  }
  .order_status p{
    font-size: 16px;
  }
  .order_status span{
    font-size: 14px;
  }
  .order_status p span{
    color:#dd3f3f;
    font-weight: bold;
    font-size: 16px;

  }
  .table{
    background: #fff;
  }
  .table thead{
    background: #e45050;
    color:#fff;
  }
  .table td,.table th{
    text-align: center;
  }
  .table td{
    line-height: 3;
  }
  .table td img{
    height:2.5rem;
    width:3rem;
  }
  @media screen and (max-width:1200px) and(min-width: 990px){
    .line{
      width: 77%;
      margin-top: 3rem;
    }
  }
  @media screen and (max-width:990px) and(min-width: 768px){
    .line{
      width: 74%;
      margin-top: 3rem;
    }
  }
  @media screen and (max-width:736px) {
    .line{
      width: 75%;
      margin-top: 3.2rem;
    }
    .order_status{
      margin-top:0px;
    }
    .order_address{
      margin-top:1.5rem;
      margin-bottom: 0px;
    }
  }

</style>
