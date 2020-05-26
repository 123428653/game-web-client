<template>
  <div id="app">
    <router-view class="pageWrap"/>
    <login
      :cssShow="cssShow"
      @close="showLoginAction(false)"
      :isShow="showLogin"
    />
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['showLogin', 'cssShow'])
  },
  methods: {
    ...mapActions(['showLoginAction'])
  }
}
</script>
