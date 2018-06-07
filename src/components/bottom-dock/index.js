import './bottom-dock.less'
import BottomDock from './BottomDock'

BottomDock.install = function (Vue) {
  Vue.component(BottomDock.name, BottomDock)
}

export default BottomDock
