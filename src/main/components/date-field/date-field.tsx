import { h, VNode } from 'js-elements'

const DateFieldClass = createDateFieldClass({
  name: 'jsc-date-field'
})

defineElement('jsc-date-field', DateFieldClass)

export const DateField = (props: Record<string, any>, ...children: VNode[]) => {
  return h('jsc-date-field', props, children)
}
;(DateField as any)[Symbol.for('tagName')] = 'jsc-date-field'

// === defineElement =================================================

function defineElement(tagName: string, elementClass: CustomElementClass) {
  if (customElements.get(tagName)) {
    document.location.reload()
  } else {
    customElements.define(tagName, elementClass)
  }
}

// === type ==========================================================

type CustomElementClass = {
  new (): CustomElement
}

type DateFieldConfig = {
  name: `${string}-${string}`
}

// === CustomElement =================================================

abstract class CustomElement extends HTMLElement {
  connectedCallback() {
    if (this.connectedCallback !== CustomElement.prototype.connectedCallback) {
      this.connectedCallback()
    }
  }
}

// === DateFieldClass ================================================

// === defineDateField ===============================================

function createDateFieldClass(config: DateFieldConfig): CustomElementClass {
  const customElementClass = class extends HTMLElement {
    constructor() {
      super()

      this.connectedCallback = () => {
        refresh()
      }

      const refresh = () => {
        ;(this as any).textContent = 'Juhu'
      }
    }

    connectedCallback() {
      this.connectedCallback()
    }
  }

  return customElementClass
}
