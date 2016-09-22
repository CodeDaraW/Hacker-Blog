<template>
  <blog-site></blog-site>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import site from '../hacker.config.js'
import BlogSite from './theme/BlogSite.vue'

export default {
  data () {
    return {
      articles: this.$store.state.articles
    }
  },
  // computed: mapGetters([
  //   'evenOrOdd'
  // ]),
  // methods: mapActions([
  //   'getArticles'
  // ]),
  components: {
    BlogSite
  },
  created () {
    if (site.title) {
      document.title = site.title
    }
  }
}
</script>

<style src="normalize.css/normalize.css">
</style>
