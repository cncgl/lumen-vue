<template lang="jade">
  #app
    // ヘッダ
    section.hero.is-primary
      .hero-head
        .container
          nav.nav
            .nav-left
              a.nav-item(v-link="{path: '/'}")
                span lumen-vue
              a.nav-item(v-link="{path: '/new'}")
                span new post
              a.nav-item(v-link="{path: '/posts'}")
                span posts

            .nav-right.nav-menu
              a.nav-item(v-link="{path: '/blog'}")
                span blog
              a.nav-item(v-link="{path: '/about'}")
                span about
              a.nav-item(v-link="{path: '/contact'}")
                span contact

    // 本体
    router-view
    // フッタ
    footer.footer
      .container
        .content.has-text-centered
          a(href="https://jp.vuejs.org/")
            p Powered by Vue.js
</template>