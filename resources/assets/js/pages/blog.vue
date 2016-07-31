<template lang="jade">
  div
    header-component
    div
      |this is blog page
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
