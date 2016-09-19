<template>
  <main>
    <article v-for="article in articles">
      <h3 class="article-title">
        <a >
          <span>{{article.title}}</span>
        </a>
      </h3>
      <div class="article-top-meta">
        <span class="posted-on">
          <a rel="bookmark">
            <time class="entry-date published">{{article.created_at}}</time>
          </a>
        </span>
      </div>
      <div class="article-content">
        <div class="entry">{{article.body}}</div>
      </div>
      <div class="article-footer">
        <div class="article-meta pull-left">
          <span v-if="article.labels.length !== 0" class="post-tags">
            
          </span>
        </div>
      </div>
    </article>
  </main>
</template>

<script>

export default {
  data () {
    return {
      articles: JSON.parse(`[
  {
    "url": "https://api.github.com/repos/CodeDaraW/Hacker/issues/7",
    "repository_url": "https://api.github.com/repos/CodeDaraW/Hacker",
    "labels_url": "https://api.github.com/repos/CodeDaraW/Hacker/issues/7/labels{/name}",
    "comments_url": "https://api.github.com/repos/CodeDaraW/Hacker/issues/7/comments",
    "events_url": "https://api.github.com/repos/CodeDaraW/Hacker/issues/7/events",
    "html_url": "https://github.com/CodeDaraW/Hacker/issues/7",
    "id": 170125445,
    "number": 7,
    "title": "建议：添加Tag功能",
    "user": {
      "login": "aimer1124",
      "id": 5865980,
      "avatar_url": "https://avatars.githubusercontent.com/u/5865980?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/aimer1124",
      "html_url": "https://github.com/aimer1124",
      "followers_url": "https://api.github.com/users/aimer1124/followers",
      "following_url": "https://api.github.com/users/aimer1124/following{/other_user}",
      "gists_url": "https://api.github.com/users/aimer1124/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/aimer1124/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/aimer1124/subscriptions",
      "organizations_url": "https://api.github.com/users/aimer1124/orgs",
      "repos_url": "https://api.github.com/users/aimer1124/repos",
      "events_url": "https://api.github.com/users/aimer1124/events{/privacy}",
      "received_events_url": "https://api.github.com/users/aimer1124/received_events",
      "type": "User",
      "site_admin": false
    },
    "labels": [

    ],
    "state": "open",
    "locked": false,
    "assignee": null,
    "assignees": [

    ],
    "milestone": null,
    "comments": 3,
    "created_at": "2016-08-09T09:48:58Z",
    "updated_at": "2016-09-18T10:18:39Z",
    "closed_at": null,
    "body": ""
  }
]`)
    }
  }
}
</script>

<style scoped>

         
</style>