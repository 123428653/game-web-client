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
            <div class="tabItem" v-for="(item, index) in tabs" :key="index">
              <a
                href="javascript:;"
                :class="tabIndex === index ? 'active' : ''"
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
          <div class="tabContent" :class="!tabIndex ? 'active' : ''">
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
                type="password"
                v-model.trim="login.password"
                @enter="enterEmail"
                ref="loginPassword"
                name="password"
                :validateRule="'required|min:6|max:16'"
              >
                <div
                  slot="right"
                  class="passwordIcon j_passwordIcon showPassword"
                >
                  <img
                    class="hideIcon"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACIElEQVRYR8WX4StFQRDFz4uIUkQ+KKKUIj75//8CnyilFKUUUeoVEaXf7c5t7r65d/fGe2/LB+7unDNnz8yskea8RnPG1ywJLElalvQu6ccSnxWBFUlHkhZrAjdGYhYEPLglfifplV+mTSACB/dS0tdfCBAYOf36tKD1H7nz42Bfk/0QAgRbl7Qhaa2ncl4k3UtaqO98NdnbAi8hAPCOpK2Cch0MniMAMD8lKwf+JOkhChSZEPkOM1IT61vSR11WBO+S3chxhj1ND4gU6AqSmu3Ryqj+UAK+KWlXEj0A4tXyChDkNHCtB6eLNU3EfdgPfOIzB/yg3o9yDQkjUJI5B69SCSUNATfODQkjQJvsKy8ORkaKwMd1hpzxmacepG9cQ6DU7chGcFsRuL+iPnCLMYbAeUmdSboYAM7WorgQwHiMyb7lDbUtaS/ZnJqTVn1SkFilQG5zl5stflQZJfJXpjYTdh3IgVdGCiojp+pEFZBNaqoceKueM/5Ib+NW0lvaiDwJZCWzrlKKwOkldLrc4MqOY8qSmqdn0xvoEX55cEY0I9fGdfpGSM8xqqvMbfW9iKLXjAcvMZo3KrJXr6ASAv8FDmEG13NXSUYKdL3j7O5KMsdDXCNyt8ZvToEcOOfxhc0N9gNg0tKqW+/+XDNKxzGPyLQrTrzjckGHfPcEImmnCp72AUrpzLGfOnjUiLhbapu7bNXrEFmH7J32f0ZZLr84KZOp8rnySAAAAABJRU5ErkJggg=="
                  />
                  <img
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
          <div class="tabContent" :class="tabIndex ? 'active' : ''">
            <div class="inputs">
              <!-- <div class="form-group">
                <input
                  type="email"
                  class="regEmail"
                  autocomplete="username"
                  placeholder=" "
                />
                <label>Your Email</label>
              </div> -->
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
                  <button
                    @click="sendCode"
                    class="button button-primary getCodeBtn"
                  >
                    Get Code
                  </button>
                  <div class="codeTime">30s</div>
                </template>
              </ace-input>
              <ace-input
                title="Your Password"
                type="password"
                v-model.trim="register.password"
                ref="registerPassword"
                name="password"
                :validateRule="'required|min:6|max:16'"
              >
                <div
                  slot="right"
                  class="passwordIcon j_passwordIcon showPassword"
                >
                  <img
                    class="hideIcon"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACIElEQVRYR8WX4StFQRDFz4uIUkQ+KKKUIj75//8CnyilFKUUUeoVEaXf7c5t7r65d/fGe2/LB+7unDNnz8yskea8RnPG1ywJLElalvQu6ccSnxWBFUlHkhZrAjdGYhYEPLglfifplV+mTSACB/dS0tdfCBAYOf36tKD1H7nz42Bfk/0QAgRbl7Qhaa2ncl4k3UtaqO98NdnbAi8hAPCOpK2Cch0MniMAMD8lKwf+JOkhChSZEPkOM1IT61vSR11WBO+S3chxhj1ND4gU6AqSmu3Ryqj+UAK+KWlXEj0A4tXyChDkNHCtB6eLNU3EfdgPfOIzB/yg3o9yDQkjUJI5B69SCSUNATfODQkjQJvsKy8ORkaKwMd1hpzxmacepG9cQ6DU7chGcFsRuL+iPnCLMYbAeUmdSboYAM7WorgQwHiMyb7lDbUtaS/ZnJqTVn1SkFilQG5zl5stflQZJfJXpjYTdh3IgVdGCiojp+pEFZBNaqoceKueM/5Ib+NW0lvaiDwJZCWzrlKKwOkldLrc4MqOY8qSmqdn0xvoEX55cEY0I9fGdfpGSM8xqqvMbfW9iKLXjAcvMZo3KrJXr6ASAv8FDmEG13NXSUYKdL3j7O5KMsdDXCNyt8ZvToEcOOfxhc0N9gNg0tKqW+/+XDNKxzGPyLQrTrzjckGHfPcEImmnCp72AUrpzLGfOnjUiLhbapu7bNXrEFmH7J32f0ZZLr84KZOp8rnySAAAAABJRU5ErkJggg=="
                  />
                  <img
                    class="showIcon"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB9UlEQVRYR+2W4UdEURDFzyqliFKKKKWIUvT//xFRNqJsiqWUliibIr/1bmbv3jfzti/75Q1rP7z77pw5c+bM62jG0ZlxfrUAWgb+y8CSpPlMwN+SPqcVdVMAC5JWJa1JWgmSvEt6kzSQ9BUBigCQbLtB0ro8gOlL4r8YdQDmJO1VFUdFNHkOI/eSfvLDJQBUfVDocXp3KOkpozi1aEvSYg0iNHKXs5EDWJe075T0IOk5KHlT0q5zpifpNT23AKLkYy9Kok3L1UUfGb2N70oAGKsjh/aXqocJOMLkZwOx8UuBhjacdtwwtgnAsamm9M6lGakdSfS6FGjjsXqALs6cVsDaNQAiukYHG17KMQs2KqwHgFNHuVzIDEMXwYTQKi84m+aes55xDQHgUZoDQCsnAYCuseQIQB8AqBkWcm+3eS6Myj1abbu499wBiy9cJRFGOrDzj7ioLDcckt8asUZ+wNmB9YFGY2MqArT1gT9zkdR4rHMn9EBgwaCOVi7JDx1hj3lKaRd4oqRvWDGX5KuW1mA8UF+nJ+sTIzLrtiG7HzY8YVr7tbZc0h3A2YZ8I4yF9z3ApThebrnBFE48xp6pfGIVewzYW9Kqhd4kuggE7NAmhFlMnC6IvojyRLCCsyUggCOSHnDAfDO6YKcFEFU+9fMWQMvALzTkaH6rRBG0AAAAAElFTkSuQmCC"
                    alt="show"
                  />
                </div>
              </ace-input>
              <!-- <div class="form-group">
                <input type="text" class="codeText" placeholder=" " />
                <label>Verification Code</label>
                <button class="button button-primary getCodeBtn">
                  Get Code
                </button>
                <div class="codeTime">30s</div>
              </div> -->
              <!-- <div class="form-group">
                <input
                  type="password"
                  class="j_regPassword"
                  autocomplete="username"
                  placeholder=" "
                />
                <label>Your Password</label>
                <div class="passwordIcon j_passwordIcon showPassword">
                  <img
                    class="hideIcon"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACIElEQVRYR8WX4StFQRDFz4uIUkQ+KKKUIj75//8CnyilFKUUUeoVEaXf7c5t7r65d/fGe2/LB+7unDNnz8yskea8RnPG1ywJLElalvQu6ccSnxWBFUlHkhZrAjdGYhYEPLglfifplV+mTSACB/dS0tdfCBAYOf36tKD1H7nz42Bfk/0QAgRbl7Qhaa2ncl4k3UtaqO98NdnbAi8hAPCOpK2Cch0MniMAMD8lKwf+JOkhChSZEPkOM1IT61vSR11WBO+S3chxhj1ND4gU6AqSmu3Ryqj+UAK+KWlXEj0A4tXyChDkNHCtB6eLNU3EfdgPfOIzB/yg3o9yDQkjUJI5B69SCSUNATfODQkjQJvsKy8ORkaKwMd1hpzxmacepG9cQ6DU7chGcFsRuL+iPnCLMYbAeUmdSboYAM7WorgQwHiMyb7lDbUtaS/ZnJqTVn1SkFilQG5zl5stflQZJfJXpjYTdh3IgVdGCiojp+pEFZBNaqoceKueM/5Ib+NW0lvaiDwJZCWzrlKKwOkldLrc4MqOY8qSmqdn0xvoEX55cEY0I9fGdfpGSM8xqqvMbfW9iKLXjAcvMZo3KrJXr6ASAv8FDmEG13NXSUYKdL3j7O5KMsdDXCNyt8ZvToEcOOfxhc0N9gNg0tKqW+/+XDNKxzGPyLQrTrzjckGHfPcEImmnCp72AUrpzLGfOnjUiLhbapu7bNXrEFmH7J32f0ZZLr84KZOp8rnySAAAAABJRU5ErkJggg=="
                  />
                  <img
                    class="showIcon"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB9UlEQVRYR+2W4UdEURDFzyqliFKKKKWIUvT//xFRNqJsiqWUliibIr/1bmbv3jfzti/75Q1rP7z77pw5c+bM62jG0ZlxfrUAWgb+y8CSpPlMwN+SPqcVdVMAC5JWJa1JWgmSvEt6kzSQ9BUBigCQbLtB0ro8gOlL4r8YdQDmJO1VFUdFNHkOI/eSfvLDJQBUfVDocXp3KOkpozi1aEvSYg0iNHKXs5EDWJe075T0IOk5KHlT0q5zpifpNT23AKLkYy9Kok3L1UUfGb2N70oAGKsjh/aXqocJOMLkZwOx8UuBhjacdtwwtgnAsamm9M6lGakdSfS6FGjjsXqALs6cVsDaNQAiukYHG17KMQs2KqwHgFNHuVzIDEMXwYTQKi84m+aes55xDQHgUZoDQCsnAYCuseQIQB8AqBkWcm+3eS6Myj1abbu499wBiy9cJRFGOrDzj7ioLDcckt8asUZ+wNmB9YFGY2MqArT1gT9zkdR4rHMn9EBgwaCOVi7JDx1hj3lKaRd4oqRvWDGX5KuW1mA8UF+nJ+sTIzLrtiG7HzY8YVr7tbZc0h3A2YZ8I4yF9z3ApThebrnBFE48xp6pfGIVewzYW9Kqhd4kuggE7NAmhFlMnC6IvojyRLCCsyUggCOSHnDAfDO6YKcFEFU+9fMWQMvALzTkaH6rRBG0AAAAAElFTkSuQmCC"
                    alt="show"
                  />
                </div>
              </div> -->
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
          ></a>
        </div>
        <div class="popBody">
          <div class="tabContent active">
            <div class="inputs">
              <div class="form-group">
                <input
                  type="email"
                  class="regEmail"
                  autocomplete="username"
                  placeholder=" "
                />
                <label>Your Email</label>
              </div>
              <div class="form-group">
                <input type="text" class="codeText" placeholder=" " />
                <label>Verification Code</label>
                <button
                  data-type="reset"
                  class="button button-primary getCodeBtn"
                >
                  Get Code
                </button>
                <div class="codeTime">30s</div>
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="j_regPassword"
                  autocomplete="username"
                  placeholder=" "
                />
                <label>Your New Password</label>
                <div class="passwordIcon j_passwordIcon showPassword">
                  <img
                    class="hideIcon"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACIElEQVRYR8WX4StFQRDFz4uIUkQ+KKKUIj75//8CnyilFKUUUeoVEaXf7c5t7r65d/fGe2/LB+7unDNnz8yskea8RnPG1ywJLElalvQu6ccSnxWBFUlHkhZrAjdGYhYEPLglfifplV+mTSACB/dS0tdfCBAYOf36tKD1H7nz42Bfk/0QAgRbl7Qhaa2ncl4k3UtaqO98NdnbAi8hAPCOpK2Cch0MniMAMD8lKwf+JOkhChSZEPkOM1IT61vSR11WBO+S3chxhj1ND4gU6AqSmu3Ryqj+UAK+KWlXEj0A4tXyChDkNHCtB6eLNU3EfdgPfOIzB/yg3o9yDQkjUJI5B69SCSUNATfODQkjQJvsKy8ORkaKwMd1hpzxmacepG9cQ6DU7chGcFsRuL+iPnCLMYbAeUmdSboYAM7WorgQwHiMyb7lDbUtaS/ZnJqTVn1SkFilQG5zl5stflQZJfJXpjYTdh3IgVdGCiojp+pEFZBNaqoceKueM/5Ib+NW0lvaiDwJZCWzrlKKwOkldLrc4MqOY8qSmqdn0xvoEX55cEY0I9fGdfpGSM8xqqvMbfW9iKLXjAcvMZo3KrJXr6ASAv8FDmEG13NXSUYKdL3j7O5KMsdDXCNyt8ZvToEcOOfxhc0N9gNg0tKqW+/+XDNKxzGPyLQrTrzjckGHfPcEImmnCp72AUrpzLGfOnjUiLhbapu7bNXrEFmH7J32f0ZZLr84KZOp8rnySAAAAABJRU5ErkJggg=="
                  />
                  <img
                    class="showIcon"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB9UlEQVRYR+2W4UdEURDFzyqliFKKKKWIUvT//xFRNqJsiqWUliibIr/1bmbv3jfzti/75Q1rP7z77pw5c+bM62jG0ZlxfrUAWgb+y8CSpPlMwN+SPqcVdVMAC5JWJa1JWgmSvEt6kzSQ9BUBigCQbLtB0ro8gOlL4r8YdQDmJO1VFUdFNHkOI/eSfvLDJQBUfVDocXp3KOkpozi1aEvSYg0iNHKXs5EDWJe075T0IOk5KHlT0q5zpifpNT23AKLkYy9Kok3L1UUfGb2N70oAGKsjh/aXqocJOMLkZwOx8UuBhjacdtwwtgnAsamm9M6lGakdSfS6FGjjsXqALs6cVsDaNQAiukYHG17KMQs2KqwHgFNHuVzIDEMXwYTQKi84m+aes55xDQHgUZoDQCsnAYCuseQIQB8AqBkWcm+3eS6Myj1abbu499wBiy9cJRFGOrDzj7ioLDcckt8asUZ+wNmB9YFGY2MqArT1gT9zkdR4rHMn9EBgwaCOVi7JDx1hj3lKaRd4oqRvWDGX5KuW1mA8UF+nJ+sTIzLrtiG7HzY8YVr7tbZc0h3A2YZ8I4yF9z3ApThebrnBFE48xp6pfGIVewzYW9Kqhd4kuggE7NAmhFlMnC6IvojyRLCCsyUggCOSHnDAfDO6YKcFEFU+9fMWQMvALzTkaH6rRBG0AAAAAElFTkSuQmCC"
                    alt="show"
                  />
                </div>
              </div>
            </div>
            <div class="opt">
              <button
                class="button button-block button-primary resetPasswordBtn"
                style="display: flex; justify-content:center; align-items:center;"
              >
                <span
                  style="height: 22px;margin-bottom: 0;margin-right: 5px;"
                  class="circularBox"
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
                <span>Reset</span>
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
      tabIndex: 0,
      tabs: ['Login', 'Register']
    }
  },
  computed: {
    ...mapGetters(['cssForgotShow', 'forgotShow', 'login', 'register'])
  },
  methods: {
    ...mapActions([
      'showForgotAction',
      'backLoginAction',
      'loginAction',
      'registerAction',
      'sendCodeAcstion'
    ]),
    enterEmail () {
      console.log(111)
    },
    changeTab (index) {
      this.tabIndex = index
    },
    validateBeforeSubmit () {
      const loginEmail = this.$refs.loginEmail.vlidate()
      const loginPassword = this.$refs.loginPassword.vlidate()
      //   this.loginAction(this.$validator);
      // 提交表单前，校验所有子组件，全部通过才允许下面操作
      this.loginAction([loginEmail, loginPassword])
    },
    validateRegister () {
      const { registerEmail, registerCode, registerPassword } = this.$refs
      this.registerAction([
        registerEmail.vlidate(),
        registerCode.vlidate(),
        registerPassword.vlidate()
      ])
    },
    sendCode () {
      const vlidateEmail = this.$refs.registerEmail.vlidate
      this.sendCodeAcstion({
        vlidateEmail,
        email: this.register.email
      })
    },
    close () {
      this.$emit('close')
    }
  }
}
</script>
