import DatepickerGroup from './components/datepicker-group/index'
import TagpickerGroup from './components/tagpicker-group/index'
import TreeTable from './components/tree-table/index'

const components = [
  DatepickerGroup,
  TagpickerGroup,
  TreeTable
]

function install (Vue, _) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default install

export {
  DatepickerGroup,
  TagpickerGroup,
  TreeTable
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
  if (install.installed) {
    install.installed = false
  }
}
