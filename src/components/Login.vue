<template>
  <div>
    <div
      class="dialogModal j_loginPop"
      :style="{ display: cssShow ? 'block' : 'none' }"
      :class="isShow ? 'fade-down' : ''"
    >
      <div class="mask"></div>
      <div class="dialogModalConent">
        <div class="popHeader">
          <div class="popTab">
            <div class="tabItem" v-for="(item, index) in loginTabs" :key="item">
              <a
                href="javascript:;"
                :class="loginActiveIndex === index ? 'active' : ''"
                @click="changeTab(index)"
                >{{ item }}</a
              >
            </div>
            <!-- <div class="tabItem"><a href="javascript:;">Register</a></div> -->
          </div>
          <a
            href="javascript:;"
            class="jsLoginClose loginClose"
            style="font-size: 24px;"
            @click="close"
          ></a>
        </div>
        <div class="popBody">
          <div class="tabContent" :class="!loginActiveIndex ? 'active' : ''">
            <div class="inputs j_loginForm">
              <ace-input
                title="Your Email"
                type="email"
                v-model.trim="login.email"
                @enter="enterEmail"
                ref="loginEmail"
                name="email"
                :validateRule="'required|email'"
              />
              <ace-input
                title="Your Password"
                :type="passwordType"
                v-model.trim="login.password"
                ref="loginPassword"
                name="password"
                :validateRule="'required|min:6|max:16'"
              >
                <div
                  slot="right"
                  class="passwordIcon j_passwordIcon showPassword"
                  @click="showPasswordHandler"
                >
                  <img
                    v-if="!showPassword"
                    class="hideIcon"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACIElEQVRYR8WX4StFQRDFz4uIUkQ+KKKUIj75//8CnyilFKUUUeoVEaXf7c5t7r65d/fGe2/LB+7unDNnz8yskea8RnPG1ywJLElalvQu6ccSnxWBFUlHkhZrAjdGYhYEPLglfifplV+mTSACB/dS0tdfCBAYOf36tKD1H7nz42Bfk/0QAgRbl7Qhaa2ncl4k3UtaqO98NdnbAi8hAPCOpK2Cch0MniMAMD8lKwf+JOkhChSZEPkOM1IT61vSR11WBO+S3chxhj1ND4gU6AqSmu3Ryqj+UAK+KWlXEj0A4tXyChDkNHCtB6eLNU3EfdgPfOIzB/yg3o9yDQkjUJI5B69SCSUNATfODQkjQJvsKy8ORkaKwMd1hpzxmacepG9cQ6DU7chGcFsRuL+iPnCLMYbAeUmdSboYAM7WorgQwHiMyb7lDbUtaS/ZnJqTVn1SkFilQG5zl5stflQZJfJXpjYTdh3IgVdGCiojp+pEFZBNaqoceKueM/5Ib+NW0lvaiDwJZCWzrlKKwOkldLrc4MqOY8qSmqdn0xvoEX55cEY0I9fGdfpGSM8xqqvMbfW9iKLXjAcvMZo3KrJXr6ASAv8FDmEG13NXSUYKdL3j7O5KMsdDXCNyt8ZvToEcOOfxhc0N9gNg0tKqW+/+XDNKxzGPyLQrTrzjckGHfPcEImmnCp72AUrpzLGfOnjUiLhbapu7bNXrEFmH7J32f0ZZLr84KZOp8rnySAAAAABJRU5ErkJggg=="
                  />
                  <img
                    v-else
                    class="showIcon"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB9UlEQVRYR+2W4UdEURDFzyqliFKKKKWIUvT//xFRNqJsiqWUliibIr/1bmbv3jfzti/75Q1rP7z77pw5c+bM62jG0ZlxfrUAWgb+y8CSpPlMwN+SPqcVdVMAC5JWJa1JWgmSvEt6kzSQ9BUBigCQbLtB0ro8gOlL4r8YdQDmJO1VFUdFNHkOI/eSfvLDJQBUfVDocXp3KOkpozi1aEvSYg0iNHKXs5EDWJe075T0IOk5KHlT0q5zpifpNT23AKLkYy9Kok3L1UUfGb2N70oAGKsjh/aXqocJOMLkZwOx8UuBhjacdtwwtgnAsamm9M6lGakdSfS6FGjjsXqALs6cVsDaNQAiukYHG17KMQs2KqwHgFNHuVzIDEMXwYTQKi84m+aes55xDQHgUZoDQCsnAYCuseQIQB8AqBkWcm+3eS6Myj1abbu499wBiy9cJRFGOrDzj7ioLDcckt8asUZ+wNmB9YFGY2MqArT1gT9zkdR4rHMn9EBgwaCOVi7JDx1hj3lKaRd4oqRvWDGX5KuW1mA8UF+nJ+sTIzLrtiG7HzY8YVr7tbZc0h3A2YZ8I4yF9z3ApThebrnBFE48xp6pfGIVewzYW9Kqhd4kuggE7NAmhFlMnC6IvojyRLCCsyUggCOSHnDAfDO6YKcFEFU+9fMWQMvALzTkaH6rRBG0AAAAAElFTkSuQmCC"
                    alt="show"
                  />
                </div>
              </ace-input>
            </div>
            <div class="opt">
              <button
                class="button button-block button-primary jLoginBtn"
                style="display: flex; justify-content:center; align-items:center;"
                @click="validateBeforeSubmit"
              >
                <span
                  style="height: 25px;margin-bottom: 0;margin-right: 5px;"
                  class="circularBox"
                  v-show="login.isLoading"
                >
                  <svg
                    style="width:19px;height:19px;"
                    viewBox="25 25 50 50"
                    class="circular"
                  >
                    <circle
                      style="stroke:#fff;"
                      cx="50"
                      cy="50"
                      r="20"
                      fill="none"
                      class="path"
                    ></circle>
                  </svg>
                </span>
                <span>Login</span>
              </button>
            </div>
          </div>
          <div class="tabContent" :class="loginActiveIndex ? 'active' : ''">
            <div class="inputs">
              <ace-input
                title="Your Email"
                type="email"
                v-model.trim="register.email"
                ref="registerEmail"
                name="email"
                :validateRule="'required|email'"
              />
              <ace-input
                title="Verification Code"
                v-model.trim="register.code"
                ref="registerCode"
                name="code"
                :validateRule="'required'"
              >
                <template slot="right">
                  <button v-if="!register.isSendCode"
                    @click="sendCode('register')"
                    class="button button-primary getCodeBtn"
                  >
                    {{register.sendCodeLoading ? 'Getting...' : 'Get Code'}}
                  </button>
                  <div v-else class="codeTime">{{register.time}}s</div>
                </template>
              </ace-input>
              <ace-input
                title="Your Password"
                :type="passwordType"
                v-model.trim="register.password"
                ref="registerPassword"
                name="password"
                :validateRule="'required|min:6|max:16'"
              >
                <div
                  slot="right"
                  @click="showPasswordHandler"
                  class="passwordIcon j_passwordIcon showPassword"
                >
                  <img
                    v-if="!showPassword"
                    class="hideIcon"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACIElEQVRYR8WX4StFQRDFz4uIUkQ+KKKUIj75//8CnyilFKUUUeoVEaXf7c5t7r65d/fGe2/LB+7unDNnz8yskea8RnPG1ywJLElalvQu6ccSnxWBFUlHkhZrAjdGYhYEPLglfifplV+mTSACB/dS0tdfCBAYOf36tKD1H7nz42Bfk/0QAgRbl7Qhaa2ncl4k3UtaqO98NdnbAi8hAPCOpK2Cch0MniMAMD8lKwf+JOkhChSZEPkOM1IT61vSR11WBO+S3chxhj1ND4gU6AqSmu3Ryqj+UAK+KWlXEj0A4tXyChDkNHCtB6eLNU3EfdgPfOIzB/yg3o9yDQkjUJI5B69SCSUNATfODQkjQJvsKy8ORkaKwMd1hpzxmacepG9cQ6DU7chGcFsRuL+iPnCLMYbAeUmdSboYAM7WorgQwHiMyb7lDbUtaS/ZnJqTVn1SkFilQG5zl5stflQZJfJXpjYTdh3IgVdGCiojp+pEFZBNaqoceKueM/5Ib+NW0lvaiDwJZCWzrlKKwOkldLrc4MqOY8qSmqdn0xvoEX55cEY0I9fGdfpGSM8xqqvMbfW9iKLXjAcvMZo3KrJXr6ASAv8FDmEG13NXSUYKdL3j7O5KMsdDXCNyt8ZvToEcOOfxhc0N9gNg0tKqW+/+XDNKxzGPyLQrTrzjckGHfPcEImmnCp72AUrpzLGfOnjUiLhbapu7bNXrEFmH7J32f0ZZLr84KZOp8rnySAAAAABJRU5ErkJggg=="
                  />
                  <img
                    v-else
                    class="showIcon"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB9UlEQVRYR+2W4UdEURDFzyqliFKKKKWIUvT//xFRNqJsiqWUliibIr/1bmbv3jfzti/75Q1rP7z77pw5c+bM62jG0ZlxfrUAWgb+y8CSpPlMwN+SPqcVdVMAC5JWJa1JWgmSvEt6kzSQ9BUBigCQbLtB0ro8gOlL4r8YdQDmJO1VFUdFNHkOI/eSfvLDJQBUfVDocXp3KOkpozi1aEvSYg0iNHKXs5EDWJe075T0IOk5KHlT0q5zpifpNT23AKLkYy9Kok3L1UUfGb2N70oAGKsjh/aXqocJOMLkZwOx8UuBhjacdtwwtgnAsamm9M6lGakdSfS6FGjjsXqALs6cVsDaNQAiukYHG17KMQs2KqwHgFNHuVzIDEMXwYTQKi84m+aes55xDQHgUZoDQCsnAYCuseQIQB8AqBkWcm+3eS6Myj1abbu499wBiy9cJRFGOrDzj7ioLDcckt8asUZ+wNmB9YFGY2MqArT1gT9zkdR4rHMn9EBgwaCOVi7JDx1hj3lKaRd4oqRvWDGX5KuW1mA8UF+nJ+sTIzLrtiG7HzY8YVr7tbZc0h3A2YZ8I4yF9z3ApThebrnBFE48xp6pfGIVewzYW9Kqhd4kuggE7NAmhFlMnC6IvojyRLCCsyUggCOSHnDAfDO6YKcFEFU+9fMWQMvALzTkaH6rRBG0AAAAAElFTkSuQmCC"
                    alt="show"
                  />
                </div>
              </ace-input>
            </div>
            <div class="opt">
              <button
                class="button button-block button-primary registerBtn"
                style="display: flex; justify-content:center; align-items:center;"
                @click="validateRegister"
              >
                <span
                  style="height: 22px;margin-bottom: 0;margin-right: 5px;"
                  class="circularBox"
                  v-show="register.isLoading"
                >
                  <svg
                    style="width: 22px;height:22px;"
                    viewBox="25 25 50 50"
                    class="circular"
                  >
                    <circle
                      style="stroke:#fff;"
                      cx="50"
                      cy="50"
                      r="20"
                      fill="none"
                      class="path"
                    ></circle>
                  </svg>
                </span>
                <span>Register</span>
              </button>
            </div>
          </div>
          <div class="forgotPassword">
            <a
              href="javascript:;"
              @click="showForgotAction(true)"
              class="j_forgotPasswordBtn"
              >Forgot password?</a
            >
          </div>
        </div>
      </div>
    </div>
    <!-- forgotPassword -->
    <div
      class="dialogModal j_forgotPasswordPop"
      :style="{ display: cssForgotShow ? 'block' : 'none' }"
      :class="forgotShow ? 'fade-down' : ''"
    >
      <div class="mask"></div>
      <div class="dialogModalConent">
        <div class="popHeader">
          <div class="popTab">
            <div class="tabItem">
              <a href="javascript:;" class="active">Reset Password</a>
            </div>
          </div>
          <a
            href="javascript:;"
            class="jsLoginClose loginClose"
            style="font-size: 24px;"
            @click="close"
          ></a>
        </div>
        <div class="popBody">
          <div class="tabContent active">
            <div class="inputs">
              <ace-input
                title="Your Email"
                type="email"
                v-model.trim="forgot.email"
                ref="forgotEmail"
                name="email"
                :validateRule="'required|email'"
              />
              <ace-input
                title="Verification Code"
                v-model.trim="forgot.code"
                ref="forgotCode"
                name="code"
                :validateRule="'required'"
              >
                <template slot="right">
                  <button v-if="!forgot.isSendCode"
                    @click="sendCode('forgot')"
                    class="button button-primary getCodeBtn"
                  >
                    {{forgot.sendCodeLoading ? 'Getting...' : 'Get Code'}}
                  </button>
                  <div v-else class="codeTime">{{forgot.time}}s</div>
                </template>
              </ace-input>
              <ace-input
                title="Your Password"
                :type="passwordType"
                v-model.trim="forgot.password"
                ref="forgotPassword"
                name="password"
                :validateRule="'required|min:6|max:16'"
              >
                <div
                  slot="right"
                  @click="showPasswordHandler"
                  class="passwordIcon j_passwordIcon showPassword"
                >
                  <img
                    v-if="!showPassword"
                    class="hideIcon"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACIElEQVRYR8WX4StFQRDFz4uIUkQ+KKKUIj75//8CnyilFKUUUeoVEaXf7c5t7r65d/fGe2/LB+7unDNnz8yskea8RnPG1ywJLElalvQu6ccSnxWBFUlHkhZrAjdGYhYEPLglfifplV+mTSACB/dS0tdfCBAYOf36tKD1H7nz42Bfk/0QAgRbl7Qhaa2ncl4k3UtaqO98NdnbAi8hAPCOpK2Cch0MniMAMD8lKwf+JOkhChSZEPkOM1IT61vSR11WBO+S3chxhj1ND4gU6AqSmu3Ryqj+UAK+KWlXEj0A4tXyChDkNHCtB6eLNU3EfdgPfOIzB/yg3o9yDQkjUJI5B69SCSUNATfODQkjQJvsKy8ORkaKwMd1hpzxmacepG9cQ6DU7chGcFsRuL+iPnCLMYbAeUmdSboYAM7WorgQwHiMyb7lDbUtaS/ZnJqTVn1SkFilQG5zl5stflQZJfJXpjYTdh3IgVdGCiojp+pEFZBNaqoceKueM/5Ib+NW0lvaiDwJZCWzrlKKwOkldLrc4MqOY8qSmqdn0xvoEX55cEY0I9fGdfpGSM8xqqvMbfW9iKLXjAcvMZo3KrJXr6ASAv8FDmEG13NXSUYKdL3j7O5KMsdDXCNyt8ZvToEcOOfxhc0N9gNg0tKqW+/+XDNKxzGPyLQrTrzjckGHfPcEImmnCp72AUrpzLGfOnjUiLhbapu7bNXrEFmH7J32f0ZZLr84KZOp8rnySAAAAABJRU5ErkJggg=="
                  />
                  <img
                    v-else
                    class="showIcon"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB9UlEQVRYR+2W4UdEURDFzyqliFKKKKWIUvT//xFRNqJsiqWUliibIr/1bmbv3jfzti/75Q1rP7z77pw5c+bM62jG0ZlxfrUAWgb+y8CSpPlMwN+SPqcVdVMAC5JWJa1JWgmSvEt6kzSQ9BUBigCQbLtB0ro8gOlL4r8YdQDmJO1VFUdFNHkOI/eSfvLDJQBUfVDocXp3KOkpozi1aEvSYg0iNHKXs5EDWJe075T0IOk5KHlT0q5zpifpNT23AKLkYy9Kok3L1UUfGb2N70oAGKsjh/aXqocJOMLkZwOx8UuBhjacdtwwtgnAsamm9M6lGakdSfS6FGjjsXqALs6cVsDaNQAiukYHG17KMQs2KqwHgFNHuVzIDEMXwYTQKi84m+aes55xDQHgUZoDQCsnAYCuseQIQB8AqBkWcm+3eS6Myj1abbu499wBiy9cJRFGOrDzj7ioLDcckt8asUZ+wNmB9YFGY2MqArT1gT9zkdR4rHMn9EBgwaCOVi7JDx1hj3lKaRd4oqRvWDGX5KuW1mA8UF+nJ+sTIzLrtiG7HzY8YVr7tbZc0h3A2YZ8I4yF9z3ApThebrnBFE48xp6pfGIVewzYW9Kqhd4kuggE7NAmhFlMnC6IvojyRLCCsyUggCOSHnDAfDO6YKcFEFU+9fMWQMvALzTkaH6rRBG0AAAAAElFTkSuQmCC"
                    alt="show"
                  />
                </div>
              </ace-input>
            </div>
            <div class="opt">
              <button
                class="button button-block button-primary registerBtn"
                style="display: flex; justify-content:center; align-items:center;"
                @click="validateForgot"
              >
                <span
                  style="height: 22px;margin-bottom: 0;margin-right: 5px;"
                  class="circularBox"
                  v-show="forgot.isLoading"
                >
                  <svg
                    style="width: 22px;height:22px;"
                    viewBox="25 25 50 50"
                    class="circular"
                  >
                    <circle
                      style="stroke:#fff;"
                      cx="50"
                      cy="50"
                      r="20"
                      fill="none"
                      class="path"
                    ></circle>
                  </svg>
                </span>
                <span>Rest Password</span>
              </button>
            </div>
            <div class="backLogin">
              <a
                href="javascript:;"
                @click="backLoginAction"
                class="j_backLogin"
                >Back Login</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/css/login.scss'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Login',
  props: {
    cssShow: {
      type: Boolean,
      default: false
    },
    isShow: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      showPassword: false,
      passwordType: 'password'
    }
  },
  computed: {
    ...mapGetters([
      'loginTabs',
      'loginActiveIndex',
      'cssForgotShow',
      'forgotShow',
      'login',
      'register',
      'forgot'
    ])
  },
  methods: {
    ...mapActions([
      'loginActiveIndexAction',
      'showForgotAction',
      'backLoginAction',
      'loginAction',
      'registerAction',
      'forgotAction',
      'sendCodeAcstion'
    ]),
    enterEmail () {
      console.log(111)
    },
    showPasswordHandler () {
      this.showPassword = !this.showPassword
      this.passwordType = this.showPassword ? 'text' : 'password'
    },
    changeTab (index) {
      this.loginActiveIndexAction(index)
      // this.tabIndex = index
    },
    validateBeforeSubmit () {
      const loginEmail = this.$refs.loginEmail.vlidate()
      const loginPassword = this.$refs.loginPassword.vlidate()
      //   this.loginAction(this.$validator);
      // 提交表单前，校验所有子组件，全部通过才允许下面操作
      this.loginAction({
        all: [loginEmail, loginPassword],
        goUser: () => {
          this.$router.push('/user')
        }
      })
    },
    validateRegister () {
      const { registerEmail, registerCode, registerPassword } = this.$refs
      this.registerAction({
        all: [
          registerEmail.vlidate(),
          registerCode.vlidate(),
          registerPassword.vlidate()
        ],
        goUser: () => {
          this.$router.push('/user')
        }
      })
    },
    sendCode (type) {
      const vlidateEmail = this.$refs[type === 'register' ? 'registerEmail' : 'forgotEmail'].vlidate
      this.sendCodeAcstion({
        vlidateEmail,
        type,
        email: type === 'register' ? this.register.email : this.forgot.email
      })
    },
    validateForgot () {
      const { forgotEmail, forgotCode, forgotPassword } = this.$refs
      this.forgotAction([
        forgotEmail.vlidate(),
        forgotCode.vlidate(),
        forgotPassword.vlidate()
      ])
    },
    close () {
      this.$emit('close')
    }
  }
}
</script>
