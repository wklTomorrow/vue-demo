<template>
  <div class="m">
    <div class="test" v-for="(item, index) in content" @click.stop="showC(item)" :key="index">
      <div class="children" v-if="item.isEdit" @click="stopPop">
        <el-input v-model="item.name" placeholder="请输入要更改的名称" size="mini" class="add"></el-input>
        <span class="operate">
          <span class="editSure" @click.stop="item.isEdit = false">保存</span>
          <span class="editCancel" @click.stop="item.isEdit = false">取消</span>
        </span>
      </div>
      <div class="children" v-else>
        <span class="l">{{ item.name }}</span>
        <span class="icon-area">
          <i class="el-icon-circle-plus-outline" @click.stop="addItem(item)"></i>
          <i class="el-icon-edit-outline" @click.stop="changeName(item)"></i>
          <i class="el-icon-delete" @click.stop="deleteItem(item)"></i>
        </span>
      </div>
      <div class="children" v-if="item.addChild" @click="stopPop">
        <el-input v-model="item.childrenName" placeholder="请输入要更改的名称" size="mini" class="add"></el-input>
        <span class="operate">
          <span class="editSure" @click.stop="item.addChild = false">保存</span>
          <span class="editCancel" @click.stop="item.addChild = false">取消</span>
        </span>
      </div>
      <div id="children" v-if="item.children && item.children.length && item.show">
        <treeChildren :content="item.children"></treeChildren>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "treeChildren",
  props: {
    content: {
      type: Array
    }
  },
  data() {
    return {};
  },
  methods: {
    showC(ele) {
      ele.show = !ele.show;
    },
    addItem(ele) {
      ele.addChild = true;
      ele.show = true;
    },
    changeName(ele) {
      ele.isEdit = true;
    },
    deleteItem(ele) {},
    stopPop() {
      // window.event? window.event.cancelBubble = true : e.stopPropagation();
      window.event ? (window.event.cancelBubble = true) : e.stopPropagation();
    }
  }
};
</script>
<style lang="less" scoped>
.m {
  height: 100%;
  width: 100%;
  .test {
    .children {
      height: 32px;
      border: 1px solid red;
      position: relative;
      .add {
        width: 185px;
      }
      & /deep/ .el-input--mini .el-input__inner {
        line-height: 20px !important;
        height: 20px !important;
      }
      .l {
        line-height: 32px;
        font-size: 16px;
      }
      .icon-area {
        position: absolute;
        top: 0;
        right: 0px;
        height: 100%;
        display: flex;
        align-items: center;
        i {
          margin-right: 10px;
        }
      }
    }
  }
}
</style>