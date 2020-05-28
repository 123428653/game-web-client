<template>
    <div role="alert" v-if="show" class="el-message" :class="'el-message--' + type">
        <div>
        <i class="el-message__icon"></i>
        </div>
        <p class="el-message__content">{{msg}}</p>
        <i class="el-message__closeBtn el-icon-close" @click="close"></i>
    </div>
</template>

<script>
import '@/assets/component/message.scss'
export default {
  name: 'Message',
  props: {
    type: {
      type: String,
      default: ''
    },
    msg: {
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>
