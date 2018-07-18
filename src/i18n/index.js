import VueI18n from 'vue-i18n'
import Vue from 'vue'

Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'en',
  messages: {
    'zh': require('./lang/zh'),
    'en': require('./lang/en')
  }
})
export default i18n
