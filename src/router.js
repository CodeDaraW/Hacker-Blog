import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './App.vue'
import BlogHeader from './theme/components/BlogHeader.vue'
import BlogIndexMain from './theme/components/BlogIndexMain.vue'
import BlogArticleMain from './theme/components/BlogArticleMain.vue'
import BlogFooter from './theme/components/BlogFooter.vue'

const router = new VueRouter({
	// mode: 'history',
	base: __dirname,
	routes: [
		{ path: '/', component: BlogIndexMain },
		{ path: '/article/:number', name: 'article', component: BlogArticleMain }
	]
})

export default router