<template lang="jade">
  .container
    form.form-horizontal(method='post', action='index.php')
      .form-group.row
        label.col-sm-4.control-label(for='name01') お名前
        .col-sm-6
          input.form-control(type='text', name='name', id='name01', placeholder='お名前')
      .form-group.row
        label.col-sm-4.control-label(for='email01') メール
        .col-sm-6
          input.form-control(type='email', name='email', id='email01', placeholder='メールアドレス')
      .form-group.row
        label.col-sm-4.control-label(for='comment01') コメント
        .col-sm-6
          textarea.form-control(name='comment', id='comment01', placeholder='コメント')

</template>

<style lang="sass">
  body {
    background-color: #ff0000;
  }
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
