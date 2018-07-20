import DatepickerGroup from './components/datepicker-group/index'
import TagGroupPicker from './components/tag-group-picker/index'
import TreeTable from './components/tree-table/index'
import CollapseCheckbox from './components/collapse-checkbox/index'

const components = [
  DatepickerGroup,
  TagGroupPicker,
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
  TagGroupPicker,
  TreeTable,
  CollapseCheckbox
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
  if (install.installed) {
    install.installed = false
  }
}
