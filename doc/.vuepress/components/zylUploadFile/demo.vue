<!-- 直传方式 -->
<template>
  <div>
    <p>
      1、支持格式（默认格式）如：[{name: "图片名称1", url: "url1", uid:
      "uid1"},{name: "图片名称2", url: "url2", uid: "uid2"}]
    </p>
    <zyl-upload-file
      v-model="fileList2"
      :action="apiUrl"
      :headers="headers"
      :limit="3"
    />

    <br />
    <br />

    <p>2、支持格式（需onlyUrlListBack开启）如：["url1", "url2", "url2"]</p>
    <zyl-upload-file
      v-model="fileList"
      :action="apiUrl"
      :headers="headers"
      :limit="3"
      onlyUrlListBack
    />

    <br />
    <br />

    <p>
      3、支持自定义数据格式如：[{fileName: "图片名称1", filePath: "url1", id:
      "uid1"},{fileName: "图片名称2", filePath: "url2", id: "uid2"}]
    </p>
    <p>
      4、支持指定上传后文件信息的取值字段（需指定 fileInfoColumn
      ，默认：'entity' ）
    </p>
    <zyl-upload-file
      v-model="fileList3"
      :fileItemColum="{
        name: 'fileName',
        url: 'filePath',
        uid: 'id',
      }"
      list-type="picture-card"
      fileInfoColumn="data.fileInfo"
      :action="apiUrl2"
      :headers="headers"
      :limit="3"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      apiUrl: 'https://mock.apifox.cn/m1/2125861-0-default/uploadFile', //直传的api地址
      apiUrl2: 'https://mock.apifox.cn/m1/2125861-0-default/uploadFile2', //直传的api2地址
      headers: {
        'ZYL-BIZ-TYPE': 'RISK',
      }, //直传的头部信息（若您的接口不需要headers可去除headers配置项）
      fileList: [
        'https://zuiyouliao.oss-cn-beijing.aliyuncs.com/RISK/doc/fa39cb25b6d74e3e92b73704d0489e71.jpg',
        'https://zuiyouliao.oss-cn-beijing.aliyuncs.com/RISK/doc/0804824021f04a33813189666109880a.jpg',
      ],
      fileList2: [
        {
          name: '图片名称1.jpg',
          url: 'https://zuiyouliao.oss-cn-beijing.aliyuncs.com/RISK/doc/fa39cb25b6d74e3e92b73704d0489e71.jpg',
          uid: 'fa39cb25b6d74e3e92b73704d0489e71',
        },
        {
          name: '图片名称2.jpg',
          url: 'https://zuiyouliao.oss-cn-beijing.aliyuncs.com/RISK/doc/0804824021f04a33813189666109880a.jpg',
          uid: '0804824021f04a33813189666109880a',
        },
      ],
      fileList3: [
        {
          fileName: '图片名称1.jpg',
          filePath:
            'https://zuiyouliao.oss-cn-beijing.aliyuncs.com/RISK/doc/fa39cb25b6d74e3e92b73704d0489e71.jpg',
          id: 'fa39cb25b6d74e3e92b73704d0489e71',
        },
        {
          fileName: '图片名称2.jpg',
          filePath:
            'https://zuiyouliao.oss-cn-beijing.aliyuncs.com/RISK/doc/0804824021f04a33813189666109880a.jpg',
          id: '0804824021f04a33813189666109880a',
        },
      ],
    }
  },
  methods: {},
}
</script>
