<template>
  <div class="loading-frame" v-if="isLoading"></div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      isLoading: 'isLoading'
    })
  }
}
</script>
<style  lang="stylus">
.loading-frame
  width 40px
  height 40px
  margin 100px auto
  background-color #9e9e9e
  border-radius 100%
  -webkit-animation scaleout 1.0s infinite ease-in-out
  animation scaleout 1.0s infinite ease-in-out

@-webkit-keyframes scaleout
  0%
    -webkit-transform scale(0.0)
  100%
    -webkit-transform scale(1.0)
    opacity 0

@keyframes scaleout
  0%
    transform scale(0.0)
    -webkit-transform: scale(0.0)
  100%
    transform scale(1.0)
    -webkit-transform scale(1.0)
    opacity 0
</style>
