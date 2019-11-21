<template>
  <div class="inputWrap">
    <input
      class="urmp-input"
      :placeholder="placeHolder"
      v-bind:value="val"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  model: {
    prop: "val",
    event: "input"
  },
  props: {
    placeholder: String,
    val: [Object, String, Number]
  },
  data() {
    return {
      placeHolder: ""
    };
  },
  mounted() {
    console.log(this.model);
    this.placeHolder = this.placeholder;
    this.modelBI = this.model;
  }
};
</script>

<style lang="less">
.inputWrap {
  font-size: 12px;
  display: inline-block;
  width: 170px;
  .urmp-input {
    height: 28px;
    line-height: 28px;
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    outline: 0;
    padding: 0 15px;
    width: 100%;
  }
}
</style>