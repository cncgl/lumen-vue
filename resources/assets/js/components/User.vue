<template lang="jade">
  // header-component
  section.section
    .columns
      .column.is-4.is-offset-4
        p.control.has-addons
          input.form-control(v-model="query" type="text" placeholder="Find a user" @keyup.enter="searchUser")
          a.btn.btn-primary(class="isLoading ? 'is-loading' : ''" @click="searchUser") Search
    template(v-if="message")
      .columns
        .column.is-6.is-offset-3
          .message.is-danger
            .message-body {{ message }}
    .columns(v-for="user in dipsItems")
      .column.is-6.is-offset-3
        .media
          figure.media-left
            p.image.is-32x32
              img(:src="user.avatar_url")
          .media-content
            .content
              a(href="user.html_url" target="_blank") {{ user.login }}
    pagenation(page.sync="page", disp-item-size="dispItemSize", items="items")
  // footer-component
</template>

<script>
import mixinSearch from '../mixins/search'
import pagenation from './partials/Pagenation'
import HeaderComponent from './Header.vue'
import FooterComponent from './Footer.vue'
export default {
  components: {
    pagenation
  },
  mixins: [mixinSearch],
  data () {
    return {
      query: '',
      message: '',
      items: [],
      page: 0,
      dispItemSize: 8,
      isLoading: false
    }
  },
  methods: {
    searchUser: function() {
      if (this.isLoading) return
      this.search(`users?q=${this.query}`)
    }
  },
  components: {
    'footer-component': FooterComponent,
    'header-component': HeaderComponent,
  }
}
</script>
