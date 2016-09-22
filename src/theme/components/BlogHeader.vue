<template>
  <header>
    <div class="site-branding">
      <h1 class="site-title">
        <router-link to="/">{{site.title}}</router-link>
      </h1>
      <p class="site-description">{{site.subTitle}}</p>
    </div>
    <nav class="site-navigation">
      <ul>
          <li><router-link to="/">主页</router-link></li>
          <!-- <li><router-link to="/archives">归档</router-link></li>
          <li><router-link to="/about">关于</router-link></li> -->
      </ul>
    </nav>
  </header>
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

<style scoped>
header {
  line-height: 1.8rem;
}

.site-branding {
  text-align: center;
  margin-bottom: 2rem;
  font-family: "Open Sans", arial, sans-serif;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}


.site-branding .site-title {
  margin: 0;
  font-size: 1.4rem;
}


.site-branding .site-title a {
  display: inline-block;
  color: #ffffff;
  font-weight: bolder;
  background-color: #F03838;
  line-height: 3rem;
  height: 3rem;
  padding: 0 1rem;
  -webkit-transition: padding 0.3s ease-out;
  transition: padding 0.3s ease-out;
}


.site-branding .site-title a:hover {
  padding: 0 1.5rem;
}

.site-branding .site-description {
  color: #9e9e9e;
  font-size: 1.3rem;
  margin: 1rem 0 0;
}


.site-navigation {
  text-align: center;

}

.site-navigation ul {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 1.6em;
}


.site-navigation ul li {
  display: inline-block;
  margin: 0 0.5rem;
}

.site-navigation ul li a {
  display: block;
  color: #F03838;
  font-size: 1.6rem;
  line-height: 2rem;
  padding: 0 1rem;
}

</style>
