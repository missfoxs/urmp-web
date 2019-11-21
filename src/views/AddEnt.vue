<template>
  <div v-if="entFormVisible">
    <div class="entFormWrap">
      <div class="formTitle">
        <span>新增关联企业</span>
        <span>
          <PushIcon @click.native="handlePush"></PushIcon>
          <CancelIcon @click.native="handleCancel"></CancelIcon>
        </span>
      </div>
      <div class="formContent">
        <el-form ref="entForm" size="mini">
          <el-form-item label="关联企业ID" class="short-item">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="关联企业名称" class="short-item">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="企业信息">
            <el-input type="textarea"></el-input>
          </el-form-item>
          <el-form-item label="审批负责人">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="云接入负责人">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="VOS负责人">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="关系人">
            <el-input></el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="Modal"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      entFormVisible: true
    };
  },
  methods: {
    handlePush() {
      console.log("添加");
    },
    handleCancel() {
      console.log("取消");
      this.entFormVisible = false;
    }
  }
};
</script>
<style lang="less">
.entFormWrap {
  position: fixed;
  width: 500px;
  top: 50%;
  left: 50%;
  //   padding: 20px;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 1px solid #e9e9e9;
  border-radius: 2px;
  z-index: 1000;
  .formTitle {
    padding: 15px;
    display: flex;
    justify-content: space-between;
    border: 1px solid #d9d9d9;
  }
  .formContent {
    padding: 15px;
    .short-item {
      width: 50%;
      display: inline-block;
    }
  }
}
.Modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.5;
  z-index: 999;
}
</style>