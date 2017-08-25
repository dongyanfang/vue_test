<template>
	<header class="hidden-xs">
	  <div class="header_main">
	    <ul>
	      <p>TMAC<a>[退出]</a></p>
	      <li class="message">信息</li><li>商城首页</li><li>个人中心</li>
	    </ul>
	  </div>
	</header>

</template>

<script>
export default {
  name: 'header',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

	header{
	  height:1.2rem;
	  background: #f4f5f9;
	  width:100%;
	  padding-top:0.7rem;
	  font-size:0.44rem;
	}
	.header_main{
	  max-width:1200px;
	  margin:0 auto;
	}
	ul{
	  float:right;
	  margin-right:8px;
	}
	ul p{
	  color:#e70303;
	  margin-right: 0.7rem;
	}
	ul p a{
	  color:#999;
	  margin-left:0.1rem;
	}
	a:hover{
	  text-decoration: none;
	  opacity: 0.8;
	}
	ul li,ul p{
	  display: inline-block;
	}
	ul li{
	  padding:0 0.8rem;
	  color:#999;
	  height:0.6rem;
	  line-height:0.6rem;
	  border-left:1px solid #999;
	}
	ul li a{
	  color:#999;
	}
	@media only screen and (max-width: 481px){

	  ul li{
	    height:0.9rem;
	    line-height:0.9rem;
	  }
	}

</style>
