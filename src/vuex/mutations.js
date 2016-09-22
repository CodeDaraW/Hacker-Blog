const mutations = {
  LOADING_START (state) {
  	state.isLoading = true
  },
  LOADING_FINISHED (state) {
  	state.isLoading = false
  },

  UPDATE_ARTICLES (state, {articles}) {
  	state.articles = articles
  },
  UPDATE_ARTICLE (state, {article}) {
  	state.article = article
  },
  UPDATE_COMMENTS_CONTENT (state, {commentsContent}) {
  	state.article.commentsContent = commentsContent;
  }
}

export default mutations
