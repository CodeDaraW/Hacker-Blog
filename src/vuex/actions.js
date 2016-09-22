import 'whatwg-fetch'
import site from '../../hacker.config.js'

const actions = {
  fetchArticles: ({ commit }) => {
    commit('LOADING_START')
    fetch(`https://api.github.com/repos/${site.githubUsername}/${site.repoName}/issues`)
      .then((response) => {
          return response.json()
        }).then((articles) => {
          commit('UPDATE_ARTICLES', {articles})
          commit('LOADING_FINISHED')
        }).catch(function(ex) {
          commit('LOADING_FINISHED')
          console.log('error:', ex)
        })
  },
  fetchArticle: ({ commit }, number) => {
    commit('LOADING_START')
    fetch(`https://api.github.com/repos/${site.githubUsername}/${site.repoName}/issues/${number}`)
      .then((response) => {
          return response.json()
        }).then((article) => {
          commit('UPDATE_ARTICLE', {article})
          commit('LOADING_FINISHED')
        }).catch(function(ex) {
          commit('LOADING_FINISHED')
          console.log('error:', ex)
        })
  },
  fecthCommentsContent: ({ commit }, number) => {
    commit('LOADING_START')
    fetch(`https://api.github.com/repos/${site.githubUsername}/${site.repoName}/issues/${number}/comments`)
      .then((response) => {
          return response.json()
        }).then((commentsContent) => {
          commit('UPDATE_COMMENTS_CONTENT', { commentsContent })
          commit('LOADING_FINISHED')
        }).catch(function(ex) {
          commit('LOADING_FINISHED')
          console.log('error:', ex)
        })
  }
}

export default actions
