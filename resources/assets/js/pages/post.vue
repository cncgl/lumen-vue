<template lang="jade">
  .container
    form(method='post', action='')
      .form-group.row
        input.form-control(type='text')
      .form-group.row
        textarea.form-control
</template>
<style lang="sass">
  body
    background-color: #ff0000
  .container
    margin-top: 10px

</style>
<script>
  export default{
    data(){
      return{
        msg: 'hello vue'
      }
    }
  }
</script>
