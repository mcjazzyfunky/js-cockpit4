import { h as createElement, VNode } from 'js-elements'
import { h } from '../../utils/dom'

const DataTableClass = createDataTableClass({
  name: 'jsc-date-field'
})

defineElement('jsc-data-table', DataTableClass)

export const DataTable = (props: Record<string, any>, ...children: VNode[]) => {
  return createElement('jsc-data-table', props, children)
}
;(DataTable as any)[Symbol.for('tagName')] = 'jsc-data-table'

// === defineElement =================================================

function defineElement(tagName: string, elementClass: CustomElementClass) {
  if (customElements.get(tagName)) {
    document.location.reload()
  } else {
    customElements.define(tagName, elementClass)
  }
}

// === types =========================================================

type CustomElementClass = {
  new (): CustomElement
}

type DataTableProps = {
  columns?: Column[]
  sortField?: string | number | null
  sortDir?: 'asc' | 'desc'
  selectMode?: 'single' | 'multi' | 'none'
}

type Column =
  | {
      text?: string
      align?: 'start' | 'center' | 'end'
      sortable?: boolean
    }
  | {
      text?: string
      columns: Column[]
    }

type DataTableConfig = {}

type DataTableViewModel = {
  headerCells: {
    text: string
    columnSpan: number
    rowSpan: number
    field: number | string
    sortable: boolean
    isLastInRow: boolean
  }[]

  sortDir: 'asc' | 'desc'
  sortField: number | string | null
  selectMode: 'single' | 'multi' | 'none'
  selectedRows: Set<number | string>
}

// === CustomElement =================================================

interface CustomElement extends HTMLElement {}

// === DateFieldClass ================================================

// === defineDateField ===============================================

function createDataTableClass(
  config: DataTableConfig
): CustomElementConstructor {
  class DataTable extends HTMLElement {
    constructor() {
      super()

      this.attachShadow({ mode: 'open' })

      this.connectedCallback = () => {
        const styleElem = h('style', null, dataTableStyles)
        this.shadowRoot!.appendChild(styleElem)
        refresh()
      }

      const refresh = () => {
        const root = this.shadowRoot!

        if (root.children.length > 1) {
          root.removeChild(root.children[1])
        }

        root.appendChild(h('div', null, 'woohoo'))
      }
    }

    connectedCallback() {
      this.connectedCallback()
    }
  }

  return DataTable
}

function buildDataTableViewModel(
  props: DataTableProps,
  selectedRows: Set<number | string>
): DataTableViewModel {
  const headerCells: DataTableViewModel['headerCells'] = []

  if (props.columns && props.columns.length > 0) {
  }

  return {
    headerCells,
    selectedRows,
    selectMode: props.selectMode || 'none',
    sortDir: props.sortDir || 'asc',
    sortField: props.sortField === undefined ? null : props.sortField
  }
}

// === styles ========================================================

const dataTableStyles = `

`
