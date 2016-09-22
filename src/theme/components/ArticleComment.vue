<template>
  <div id="comments" class="comments-area">
    <header>
  		<h3 class="title">{{comments.length}} 条评论</h3>
  	</header>
    <ul v-if="comments.length !== 0" class="comments-list">
      <li v-for="comment in comments">
      	<div class="avatar">
      		<img :src="comment.user.avatar_url">
  			</div>
      	<div class="body">
      		<div class="heading">
      			<div class="meta">
      				<div class="username">{{comment.user.login}}</div>
      				<div class="date">{{comment.created_at | dateformatter}}</div>
      			</div>
  				</div>
          <div class="comment-content" v-html="marked(comment.body)"></div>
      	</div>
      </li>
  	</ul>
    <div class="join-discuss">
      <p>发表评论将跳转到GitHub Issue页面</p>
      <a :href="article.html_url" target="_blank">发表评论</button>
    </div>
  </div>
</template>
<script>
import marked from 'marked'

marked.setOptions({
  highlight: function (code) {
    return require('highlight.js').highlightAuto(code).value;
  }
});

import { mapGetters } from 'vuex'

export default {
  methods: {
    marked
  },
  computed: {
    ...mapGetters({
      comments: 'getComments',
      article: 'getArticle'
    })
  },
  filters: {
    dateformatter: s => s.slice(0, 10)
  }
}
</script>
<style lang="stylus" scoped>
.comments-area
  header
    position relative
    text-align center
    overflow hidden
    margin 2rem 0

    .title
      position relative
      display inline-block
      font-size 2rem

      &:before
        content ''
        width 40px
        height 2px
        background-color #e0e0e0
        position absolute
        top 50%
        margin-right 2rem
        right 100%
        margin-top -1px

      &:after
        content ''
        width 40px
        height 2px
        background-color #e0e0e0
        position absolute
        top 50%
        left 100%
        margin-left 2rem
        margin-top -1px

.comments-list
  margin 0
  padding 0
  list-style none

  li
    padding 1rem 0
    font-size 1.4rem
    line-height 1.4
    display flex
    align-items flex-start

    .avatar
      width 48px
      height 48px
      background-color #e0e0e0
      border-radius 24px
      margin-right 10px
      overflow hidden

      img
        width 100%
        height 100%

    .body
      position relative
      flex 1
      padding-bottom 1rem
      border-bottom 1px solid #eee

      p
        margin 0 0 1rem

      img
        max-width 100%

      .heading
        height 48px
        margin-bottom 0.5rem

      .username
        font-size 1.8rem
        color #424242

      .date
        font-size 1.3rem
        color #9e9e9e

      .comment-content
        overflow-x auto

        pre
          overflow-x visible
          white-space pre-wrap

          code
            color black
            background-color transparent
            border-radius 3px
            padding 5px

.join-discuss
  margin 1rem 0

  p
    color #9e9e9e
    font-size 1.4rem
    display inline-block
    vertical-align center
  a
    margin-top 10px
    float right
    display inline-block
    color #fff
    background-color #F03838
    padding 0 20px
    min-width 52px
    border 0
    height 32px
    font-size 16px
    line-height 32px
    text-align center
    cursor pointer

</style>
