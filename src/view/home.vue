<template>
  <div class="width">
    <div class="left">
      <tree :content="content"></tree>
    </div>
    <div class="right"></div>
  </div>
</template>
<script>
import tree from "./tree";
export default {
  data() {
    return {
      content: [
        {
          name: "12222222222",
          id: 1,
          show: false,
          isEdit: false,
          addChild: false,
          children: [
            {
              name: "1-1",
              id: 11,
              show: false,
              isEdit: false,
              addChild: false,
              children: [
                {
                  name: "1-1-1",
                  show: false,
                  id: 111,
                  isEdit: false,
                  addChild: false,
                  children: []
                }
              ]
            },
            {
              name: "1-2",
              id: 12,
              isEdit: false,
              addChild: false,
              show: false,
              children: []
            }
          ]
        },
        {
          name: "2",
          id: 2,
          show: false,
          isEdit: false,
          addChild: false,
          children: []
        }
      ]
    };
  },
  components: {
    tree
  }
};
</script>
<style lang="less" scoped>
.width {
  height: 100vh;
  width: 100vw;
  display: flex;
  .left {
    width: 300px;
    border: 1px solid red;
  }
  .right {
    flex: 1;
  }
}
</style>