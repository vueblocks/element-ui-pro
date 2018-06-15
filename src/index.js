import DatepickerGroup from './components/datepicker-group/index'

const components = [
  DatepickerGroup
]

function install (Vue, _) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default install

export {
  DatepickerGroup
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
  if (install.installed) {
    install.installed = false
  }
}
