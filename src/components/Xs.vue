
<template>
  <div class="qui-list">
    <span class="list-tips">{{tipsText}}</span>
    <!-- 依次进行类比计算 -->
    <span class="list-tips">{{msg}}</span>
    <qui-btn v-on:btnClickEvent="btnClickEvent" :msg=msg class="small"></qui-btn>
  </div>
</template>

<script>
import quiButton from "../components/quiButton.vue";
export default {
  props: {
    msg: {
      default: '下载'
    },
    tipsText: {
      default: '默认的文案'
    }
  },
  components: {
    "qui-btn": quiButton
  },
  methods: {
    btnClickEvent: function() {
      alert('按钮点击事件');
    }
  }
};
</script>


