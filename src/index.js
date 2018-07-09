import DatepickerGroup from './components/datepicker-group/index'
import TagpickerGroup from './components/tagpicker-group/index'
import TreeTable from './components/tree-table/index'
import CollapseCheckbox from './components/collapse-checkbox/index'

const components = [
  DatepickerGroup,
  TagpickerGroup,
  TreeTable,
  CollapseCheckbox
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
  TreeTable,
  CollapseCheckbox
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
  if (install.installed) {
    install.installed = false
  }
}
