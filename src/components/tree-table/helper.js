'use strict'
import Vue from 'vue'

export function treeToArray(data, expandAll, parent = null, level = null) {
  let tmp = []
  Array.from(data).forEach(function (record) {
    if (record._expanded === undefined) {
      Vue.set(record, '_expanded', expandAll)
    }
    let _level = 1
    if (level !== undefined && level !== null) {
      _level = level + 1
    }
    Vue.set(record, '_level', _level)
    if (parent) {
      Vue.set(record, 'parent', parent)
    }
    tmp.push(record)
    if (record.children && record.children.length > 0) {
      const children = treeToArray(record.children, expandAll, record, _level)
      tmp = tmp.concat(children)
    }
  })
  return tmp
}

/**
 * 每行初始化_edit属性，用于行编辑
 * @param data
 */
export function recursiveTree(data) {
  const res = data.map(v => {
    if (v.children && v.children.length > 0) {
      recursiveTree(v.children)
    }
    Vue.set(v, '_edit', false)
    return v
  })
  return res
}
