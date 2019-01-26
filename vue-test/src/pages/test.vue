<template>
  <select-all :data1="options"></select-all>
</template>

<script>
  import selectAll from '../components/select/select'
    export default {
        name: "test",
      components:{selectAll },
      data(){
          return {
              options:['变更中','未生效','作废','正常','审核中']
          }
      }
    }
</script>

<style scoped>

</style>
