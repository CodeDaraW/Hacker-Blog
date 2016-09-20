<template>
  <div class="blog">
    <div class="content">
    <blog-header></blog-header>
    <blog-index-main></blog-index-main>
    <blog-footer></blog-footer>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import BlogHeader from './components/BlogHeader.vue'
import BlogIndexMain from './components/BlogIndexMain.vue'
import BlogFooter from './components/BlogFooter.vue'

export default {
  data () {
    return {
      articles: this.$store.state.articles
    }
  },
  methods: mapActions([
    'updateArticles',
    'updateCommentsContent'
  ]),
  components: {
    BlogHeader,
    BlogIndexMain,
    BlogFooter
  },
  created () {
  }
}
</script>

<style lang="stylus">
html
  font-size 10px
  -webkit-text-size-adjust 100%
  
p
h1
h2
h3
h4
h5
h6 
  margin 0

a
  text-decoration none

body
  background-color #f7f7f7
  font-family "Segoe UI", "Lucida Grande", Helvetica, "Microsoft YaHei", FreeSans, Arimo, "Droid Sans","wenquanyi micro hei","Hiragino Sans GB", "Hiragino Sans GB W3", Arial, sans-serif
  -moz-osx-font-smoothing grayscale
  -webkit-font-smoothing antialiased
  overflow-x hidden

  .blog
    max-width 1170px
    min-height 100vh
    background-color #ffffff
    margin 0 auto

    .content
      box-sizing border-box
      max-width 770px
      width 100%
      padding 80px 10px 10px
      margin 0 auto

.icon-meta
    display -webkit-box
    display -ms-flexbox
    display -webkit-flex
    display flex

.icon-comments
    display inline-block
    width 18px
    height 19px
    background url(./images/icon-bubble.svg) center top no-repeat
    background-size 18px 18px

.icon-tags
    display inline-block
    width 19px
    height 16px
    background url(./images/icon-tags.svg) center center no-repeat
    background-size 19px 16px

.icon-heart
    display inline-block
    width 19px
    height 16px
    background url(./images/icon-heart.svg) center center no-repeat
    icon-heart 19px 16px
  
</style>
