<template>
  <div class="form-group">
    <input
      v-validate="validateRule"
      :type="type"
      :name="name"
      autocomplete="username"
      v-model="newValue"
      @keydown.enter="enter"
      placeholder=" "
    />
      <!-- @input="$emit('input', $event.target.value)" -->
    <label>{{ title }}</label>
    <slot name="right"></slot>
    <span class="error" v-show="errors.has(name)">{{
      errors.first(name)
    }}</span>
  </div>
</template>
<script type="text/javascript">
import { mapGetters } from 'vuex'
export default {
  name: 'AceInput',
  props: {
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    validateRule: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    enter () {
      this.$emit('enter')
    },
    vlidate () {
      return this.$validator.validateAll()
    }
  },
  computed: {
    ...mapGetters(['login']),
    newValue: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>

<style lang="scss">
.error {
  color: #f00;
  position: absolute;
  bottom: -23px;
  left: 0;
  white-space: nowrap;
  font-size: 14px;
}
</style>
