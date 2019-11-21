<template>
  <div>
    home page
    <button @click="resource">资源管理</button>
  </div>
</template>

<script>
export default {
  methods: {
    resource() {
        this.$router.push({name: 'resourceManage', params: {userId: '111'}})
    }
  }
};
</script>