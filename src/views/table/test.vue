<template>
  <el-container v-loading="loading" class="post-article">
    <el-header class="header">
      <br>
      <el-input v-model="article.title" placeholder="请输入标题..." style="width: 400px;margin-left: 10px" />
    </el-header>
    <el-main class="main">
      <div id="editor">
        <mavon-editor v-model="article.mdContent" style="height: 100%;width: 100%;" />
      </div>
      <div style="display: flex;align-items: center;margin-top: 15px;justify-content: flex-end">
        <el-button type="primary" @click="saveBlog()">录入文章</el-button>
      </div>
    </el-main>
  </el-container>
</template>
<script>

import { mavonEditor } from 'mavon-editor'
// 可以通过 mavonEditor.markdownIt 获取解析器markdown-it对象
import 'mavon-editor/dist/css/index.css'
import { save } from '@/api/test'

export default {
  name: 'Editor',
  components: {
    mavonEditor
  },
  data() {
    return {
      editor: '',
      categories: [],
      tagInputVisible: false,
      tagValue: '',
      loading: false,
      from: '',
      article: {
        id: '-1',
        dynamicTags: [],
        title: '',
        mdContent: '',
        cid: ''
      }
    }
  },
  methods: {
    saveBlog() {
      save(this.article.mdContent).then(res => {
        if (res.code === 200) {
          console.log('--- success')
        } else {
          this.$message.error('数据加载错误，请检查后台服务！')
        }
      })
    }
    /*    imgAdd(pos, $file) {
      var _this = this
      // 第一步.将图片上传到服务器.
      var formdata = new FormData()
      formdata.append('image', $file)
      // eslint-disable-next-line no-undef
      uploadFileRequest('/article/uploadimg', formdata).then(resp => {
        var json = resp.data
        // eslint-disable-next-line eqeqeq
        if (json.status == 'success') {
          _this.$refs.md.$imglst2Url([[pos, json.msg]])
        } else {
          _this.$message({ type: json.status, message: json.msg })
        }
      })
    }*/
  }
}
</script>
