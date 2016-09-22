const getters = {
  getAllArticles: state => state.articles,
  isLoading: state => state.isLoading,
  getArticle: state => state.article,
  getComments: state => state.comments
}

export default getters
