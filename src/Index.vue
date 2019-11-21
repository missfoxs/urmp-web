<template>
  <div id="app">
    <div id="nav">
      <el-menu
        default-active="2"
        class="menu"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :router="true"
      >
        <el-menu-item v-for="item in menuList" :index="item.path" :key="item.title">
          <span slot="title">{{item.title}}</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div id="wrapper">
      <div class="header">
        <p>首页</p>
        <i class="el-icon-s-home backHome"></i>
        <span> / 资源管理</span>
      </div>
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Util from './Util';
export default {
  data() {
    return {
      menuList: [
        {
          title: "号码管理",
          path: "/"
        },
        {
          title: "任务管理",
          path: "resourceManage"
        },
        {
          title: "企业信息管理",
          path: "entInfoManage"
        },
        {
          title: "账号权限",
          path: "numberManage"
        },
        {
          title: "系统配置",
          path: "numberManage"
        },
        {
          title: "日志管理",
          path: "numberManage"
        }
      ]
    };
  },
  created(){
    const data = new URLSearchParams({
      name: '小明',
      age: 18
    });
    // Util.AjaxHelper({
    //   url: 'resourceManage',
    //   methods: 'post',
    //   data
    // }).then(res=>{
    //   console.log(res)
    // })
  },
  methods: {
    // handleOpen(key, keyPath) {
    //   console.log(key, keyPath);
    // },
    // handleClose(key, keyPath) {
    //   console.log(key, keyPath);
    // }
  }
};
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
}

#nav {
  width: 300px;
}
#wrapper {
  flex-grow: 1;
  background-color: #eff3f6;
  .header {
    background-color: #FFF;
    padding: 10px 20px;
    p{
      margin-bottom: 10px;
    }
    .backHome {
      cursor: pointer;
      color: #98cbf6;
    }
  }
  .content {
    padding: 20px;
  }
}
</style>
