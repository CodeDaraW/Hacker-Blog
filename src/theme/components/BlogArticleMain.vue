<template>
  <main class="site-main posts-loop">
    <loading-hint></loading-hint>
    <article v-if="!isLoading">
      <h3 class="article-title">
        <router-link :to="{ name: 'article', params: { number: article.number }}" exact>
          <span>{{article.title}}</span>
        </router-link>
      </h3>
      <div class="article-top-meta">
        <span class="posted-on">
          <router-link :to="{ name: 'article', params: { number: article.number }}" exact>
            <time class="entry-date published">{{article.created_at | dateformatter}}</time>
          </router-link>
        </span>
      </div>
      <div class="article-content">
        <div class="entry" v-html="marked(article.body)"></div>
      </div>
      <div class="article-footer">
        <div class="article-meta pull-left">
          <span v-if="article.labels.length !== 0" class="post-tags">
            <i class="icon-tags"></i>
            <a v-for="label in article.labels">{{label.name}}</a>
          </span>
        </div>
        <div class="article-meta pull-right">
          <span>
            <i class="icon-comments"></i>
            <span>
              <a >{{article.comments}} 条评论</a>
            </span>
          </span>
        </div>
      </div>
      <!-- <ul v-if="article.commentsContent">
        <li v-for="comment in article.commentsContent">{{comment.user.login}} - {{comment.body}}</li>
      </ul> -->
    </article>
  </main>
</template>

<script>
import 'whatwg-fetch'
import marked from 'marked'

import { mapGetters, mapActions } from 'vuex'

import LoadingHint from './LoadingHint.vue'

export default {
  data () {
    return {
    }
  },
  methods: {
    marked,
    ...mapActions([
      'fetchArticle',
      'fecthCommentsContent'
    ])
  },
  components: {
    LoadingHint
  },
  filters: {
    dateformatter: s => s.slice(0, 10)
  },
  created () {
    this.fetchArticle(this.$route.params.number)
    this.fecthCommentsContent(this.$route.params.number)
  },
  computed: {
    ...mapGetters({
      article: 'getArticle',
      isLoading: 'isLoading'
    })
  }
}
</script>
<style lang="stylus">
$hackerRed = #f03838
$hackerGray = #9e9e9e
$articleTitleColor = #212121
$articleTextColor = #424242

article
  position relative
  padding 8rem 0

  a
    color $hackerRed

  &:not(:first-child):before
    content ''
    width 150px
    height 1px
    background-color: #e0e0e0
    position absolute
    top 0
    left 50%
    margin-left -75px

  blockquote
    margin 6rem 2rem
    padding-left 15px
    line-height 2rem
    border-left 4px solid $hackerRed

  .article-title
    position relative
    color $articleTitleColor
    font-size 2.4rem
    line-height 1.3
    text-align center
    margin 0
    padding 0 2rem

    a
      display block
      color $articleTitleColor

      span
        padding-bottom 3px
        -webkit-transition 0.15s
        transition 0.15s
        box-shadow inset 0 -2px 0 rgba(240, 56, 56, 0)

      &:hover
        color $articleTitleColor

        span
          box-shadow inset 0 -2px 0 rgba(240, 56, 56, 0.4)

  .article-top-meta
    position relative
    color $hackerGray
    font-size 1.3rem
    text-align center
    margin 1rem 0

    span
      margin 0 0.5rem

    a
      color $hackerGray
      &:hover
        color $hackerRed

      time
        font-style italic

  .article-excerpt, .article-content, .featured-media
    margin 4rem 0
    font-size 1.6rem
    color $articleTextColor

    h1
      font-size 1.6em

    h2
      font-size 1.25em

    h3
      font-size 1.15em

    h4
      font-size 1.1em

    h5
      font-size 1em

    h6
      font-size 1em

    img
      max-width: 100%
      height auto
      margin 1rem auto

  .article-footer
    .pull-left
      float left
    .pull-right
      float right

    &:after
      content " "
      display block
      clear both

    .article-meta > span:not(:last-child)
      margin-right 3rem

    .article-meta > span
      display inline-block

    .article-meta > span > span
      line-height 1
      vertical-align middle

    .article-meta
      font-size 1.3rem
      color $hackerGray

      a
        color $hackerGray
        &:hover
          color $hackerRed

      i
        vertical-align middle
        color $hackerGray
        margin-right 0.5rem

    .post-tags
      a
        &:before
          content "#"

        &:not(:last-of-type):after
          content ","
          padding-right 5px

  pre
    background-color #272822
    padding 20px
    border-radius 10px

    code
      background-color #272822
      color white



  code
    padding 2px 4px
    margin-left 2px
    margin-right 2px
    color #c7254e
    background-color #F3F2ED
    border-radius 5px

  p
    margin 2rem 0
    line-height 1.8


  .video-container
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 0;
    height: 0;
    overflow: hidden;

    iframe
      position: absolute;
      top:0;
      left: 0;
      width: 100%;
      height: 100%;

  table
    max-width 100%
    width 100%

    caption
      padding 5px
      color #333
      background-color #e5e5e5

    th, td
      text-align left
      padding 0.6em
      vertical-align top

    th
      vertical-align bottom
      border-bottom 1px solid #e5e5e5

    tbody + tbody
      border-top 2px solid #e5e5e5

    .table
      background-color #fff


    .table-bordered
      border 1px solid #e5e5e5

    .table-striped tbody tr:nth-of-type(odd)
      background-color:#f2f2f2


</style>
