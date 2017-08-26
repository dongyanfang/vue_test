<template>

  <div class="order_list_main">
    <h2>
      订单中心
      <button class="search_btn">搜索</button>
    </h2>
    <div class="order_list_body">
      <div class="btn-group">
        <span class="lable">订单状态</span>
        <button type="button" class="btn btn-default dropdown-toggle"
                data-toggle="dropdown">
          所有订单 <span class="caret"></span>
        </button>
        <ul class="dropdown-menu" role="menu">
          <li><a href="#">未支付</a></li>
          <li class="divider"></li>
          <li><a href="#">已支付</a></li>
        </ul>
      </div>
      <div class="order_time">
        <span class="lable">下单时间</span>
        <input type="date" placeholder="">
        <span>－</span>
        <input type="date" placeholder="">
      </div>
      <div class="order_time  order_time2">
        <span class="lable">订单号</span>
        <input type="text"/>
      </div>
      <table class="table hidden-xs">
        <thead>
        <tr><th><input type="radio"></th><th>商品</th><th>订单号</th><th>下单时间</th><th>单价</th><th>数量</th><th>订单金额</th><th>交易状态</th><th>交易操作</th></tr>
        </thead>
        <tbody>
        <p><input type="radio">火中冰雪火锅店</p>
        <tr>
          <td></td>
          <td><img src="../assets/img/no_header.jpg"></td>
          <td><span>121212121212121212</span></td>
          <td>2017-01-20<br>16:09:01</td>
          <td>3000</td><td>1</td>
          <td>300<br>(含运费0.0)<br>哆拾惠支付</td>
          <td class="green">已完成</td>
          <td>
            <a>查看详情</a>
            <a class="red">删除订单</a>
            <a>评价商品</a>
            <a>查看激励</a>
          </td>
        </tr>
        <p><input type="radio">火中冰雪火锅店</p>
        <tr>
          <td></td>
          <td><img src="../assets/img/no_header.jpg"></td>
          <td>121212121212121212</td>
          <td>2017-01-20<br>16:09:01</td>
          <td>3000</td>
          <td>1</td>
          <td>300<br>(含运费0.0)<br>哆拾惠支付</td>
          <td class="yellow">已完成</td>
          <td>
            <a>查看详情</a>
            <a class="red">删除订单</a>
            <a>评价商品</a>
            <a>查看激励</a>
          </td>
        </tr>
        </tbody>
      </table>

      <div class="clear"></div>
      <div class="order_margin">
        <div class="do_table col-md-4 hidden-xs">
          <input type="checkbox"><span>全选</span>
          <button>永久删除</button>
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
  .order_list_main{
    width:75%;
    float:left;
  }
  .order_list_main h2{
    padding:0 0.8rem;
    background: #e6e6e6;
    width:100%;
    line-height: 40px;
    font-size: 0.8rem;
    margin-bottom: 0px;
    font-weight: bold;
    color:#333;
  }
  .search_btn{
    float: right;
    font-size: 0.7rem;
    background: #ffce5b;
    height:30px;
    line-height: 30px;
    margin-top: 5px;
    border:none;
    display: inline-block;
    padding:0rem 1rem;
    color:#fff;
  }
  .search_btn:hover{
    background: #ffce5b;
    opacity: 0.8;
  }
  .order_list_body{
    font-size: 0.7rem;
  }
  .order_list_body .lable{
    float: left;
    width:4rem;
    line-height: 35px;
    text-align: center;
    font-size: 0.7rem;
  }
  .order_time2{
    margin-bottom: 15px;
  }
  .order_list_body button{
    border-radius:0px;
    width:100px;
  }
  .btn-default:active:hover, .btn-default.active:hover, .open > .dropdown-toggle.btn-default:hover, .btn-default:active:focus, .btn-default.active:focus, .open > .dropdown-toggle.btn-default:focus, .btn-default:active.focus, .btn-default.active.focus, .open > .dropdown-toggle.btn-default.focus{
    background:#fff;
    box-shadow: none;
  }
  button:hover,button:focus {background:#fff;}
  .dropdown-menu{
    top: 31px;
    left:5.1rem;
    min-width:100px;
  }
  .order_time{
    display: inline-block;
    margin-top:10px;
    float:left;
  }
  .btn-group{
    margin-top:10px;
    float: left;
  }
  .order_time .lable{
    line-height: 35px;
    display: inline-block;
    width:4rem;
    text-align: center;
  }
  .order_time input{
    width:121px;
    height:23px;
    border:1px solid #ccc;
  }
  .table{
    position: relative;
  }
  .table td{
    height:130px;
    padding-top:50px;
  }
  .table tr td:nth-last-child(1),.table tr td:nth-last-child(6),.table tr td:nth-last-child(3),.table tr td:nth-last-child(3){
    line-height:20px;
    padding-top:36px;
  }
  .table tr td:nth-last-child(6){
    padding-top:50px;
  }
  .table tr td:nth-child(2){
    padding-top:33px;
  }
  .table tr td:nth-last-child(1) a{
    display: block;
    line-height: 20px;
    color: #333;
  }
  .table{
    background: #ffffff;
    padding-top: 50px;
  }
  .table tr td:nth-last-child(1) a:hover{
    text-decoration: none;
  }
  .table tbody{
    position: relative;
  }
  .table tbody p{
    position: absolute;
    line-height: 56px;
    left: 1.2rem;
    font-size: 0.8rem;
    color: #e45050;
  }
  .table tbody td,.table th{
    text-align: center;
  }
  .table tbody td img{
    width:60px;
    height:60px;
    margin-top:10px;
  }
  .table tbody p input{
    margin-right:1rem;
  }
  .green{
    color:#00b27e;
  }
  .red{
    color:#e45050 !important;
  }
  .yellow{
    color:#d99b0a;
  }
  .do_table{
    float: left;
    margin-top:10px;
  }
  .do_table button{
    background: #e45050;
    color: #fff;
    border:none;
    display: inline-block;
    height:35px;
  }
  .do_table input{
    float: left;
    margin: 0.5rem 0 0 0.6rem;
  }
  .do_table span{
    margin:0 15px 0 5px;
  }
  .text-bold{
    font-weight: bold;
  }
  .app_table_main{
    float:left;
    margin-top:1rem;
    width: 100%;
  }
  .app_table{
    background: #fff;
    width: 100%;
  }
  .app_table p,.app_table dl dd{
    display: inline-block;
    margin:0;
  }
  .app_table_head{
    padding:0.2rem 1rem;
    background: #ddd;
    border-bottom: 1px solid #ddd;
  }
  .app_table_head input{
    float: left;
    margin-right:0.5rem;
  }
  .app_table_head p{
    line-height: 1.8rem;
  }
  .app_table_head span{
    line-height: 1.8rem;
    float: right;
  }
  .app_table dl{
    padding:1rem;
    height:6rem;
    margin-bottom: 0px;
    border-bottom: 1px solid #ddd;
  }
  .app_table dl dd img{
    height:4rem;
    width:4rem;
  }
  .app_table dl dd p{
    display: block;
    font-size: 0.8rem;
    font-weight: bold;
    color:#333;
    line-height: 2rem;
  }
  .app_table dl dd:nth-child(3){
    text-align: center;
  }
  .app_table_cost{
    text-align: right;
    padding:0.4rem 1rem;
    border-bottom:1px solid #ddd;
  }
  .app_table_btn{
    padding:0.5rem;
    text-align: right;
  }
  .app_table_btn button{
    padding:0.4rem 0.5rem;
    border-radius: 5px;
    width:auto;
    border:1px solid #ddd;
    background: #fff;
    font-size: 0.5rem;
  }
  .order_margin{
    background: #fff;
    min-height: 85px;
    margin-top:-20px;
    padding-top:20px;
  }
  .clear{
    clear:both;
  }

</style>
