<template>
  <div>
    <HeaderS></HeaderS>
    <NavS></NavS>
    <router-view></router-view>

  </div>
</template>
<script>
import HeaderS from '@/components/Header'
import NavS from '@/components/Nav'
export default {
  components: {HeaderS, NavS},
  data: () => ({
    userData: null
  })
}
</script>
