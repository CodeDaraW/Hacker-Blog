const mutations = {
  UPDATE_ARTICLES (state, {articles}) {
  	articles.forEach ((article) => {
  		state.articles.push(article)
  	})
  },
  UPDATE_COMMENTS_CONTENT (state, {article, commentsContent}) {
  	article.commentsContent = commentsContent;
  }
}

export default mutations