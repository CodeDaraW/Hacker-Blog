<template>
  <footer class="site-footer">
    <p class="site-info">
      Proudly powered by <a href="https://github.com/CodeDaraW/Hacker-Blog" target="_blank">Hacker-Blog</a> and
      Theme by <a href="https://github.com/CodeDaraW/Hacker" target="_blank">Hacker</a>
      <br>
      &copy; 2016 {{site.author}}
    </p>
  </footer>
</template>

<script>
import site from '../../../hacker.config.js'

export default {
  data () {
    return {
      site: site
    }
  }
}
</script>

<style lang="stylus">
footer.site-footer
  position relative
  text-align center
  line-height 1.8
  padding-top 1rem
  color #9e9e9e

  a
    color #f03838

  .site-info
    color #9e9e9e
    font-size: 1.3rem
    margin 0.5rem 0
</style>
