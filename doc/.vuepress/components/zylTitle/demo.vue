<template>
  <div>
    <zyl-title titleContent="标题1（写法1）"></zyl-title>
    <zyl-title>
      标题2
      <span style="color:red">（写法2）</span>
    </zyl-title>
    <zyl-title lineColor="orange" borderColor="#f3f3f3" borderHeight="5">
      标题3（自定义颜色）
    </zyl-title>
    <zyl-title mBottom="100" lineBottom="50">
      标题4（自定义间距）
    </zyl-title>
    <zyl-title :borderLine="false">标题5（不显示下划线）</zyl-title>
    <zyl-title titleContentWeight="normal">标题6（标题字体不加粗）</zyl-title>
    <zyl-title>
      标题7（自定义插槽）
      <template slot="end">自定义插槽</template>
    </zyl-title>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {}
}
</script>
