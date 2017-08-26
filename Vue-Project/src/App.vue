<template>
  <div>
    <HeaderS></HeaderS>
    <NavS></NavS>
    <div class="body_main">
      <SideBar></SideBar>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import HeaderS from '@/components/Header'
import NavS from '@/components/Nav'
import SideBar from '@/components/SideBar'

export default {
  components: {HeaderS, NavS, SideBar},
  data: () => ({
    userData: null
  })
}
</script>
<style scoped>
  .body_main{
    width:1200px;
    margin:20px auto;
  }
</style>
