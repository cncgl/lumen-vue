<template lang="jade">
  div
    header-component
    .container
      form.form-horizontal
        .form-group
          label.col-sm-6.control-label(for='name01') お名前
          .col-sm-6
            input.form-control(type='text', name='name', id='name01', placeholder='お名前')
    footer-component
</template>

<style lang="sass">
  body{
    background-color: #ff0000;
  }
</style>

<script>
  import HeaderComponent from '../components/Header.vue'
  import FooterComponent from '../components/Footer.vue'
  export default{
    data(){
      return{
        msg: 'hello vue'
      }
    },
    components:{
      'footer-component': FooterComponent,
      'header-component': HeaderComponent,
    }
  }
</script>
