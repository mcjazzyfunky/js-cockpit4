import { attr, component, h, html } from 'js-elements'
// import { defineElement } from 'js-elements/tools'
import { useStyles } from 'js-elements/hooks'
import { SlButton } from '@shoelace-style/shoelace'

class PaginatorProps {
  @attr(Number)
  pageIndex = -1

  @attr(Number)
  pageCount = -1

  @attr(Boolean)
  disabled = false
}

export const Paginator = component('jsc-paginator', PaginatorProps, (p) => {
  useStyles(paginatorStyles)

  return () => {
    if (p.pageIndex < 0 || p.pageCount < 0) {
      return null
    }

    const toFirstPageButton = <sl-button>First</sl-button>
    const toPreviousPageButton = <sl-button>Previous</sl-button>
    const toNextPageButton = <sl-button>Next</sl-button>
    const toLastPageButton = <sl-button>Last</sl-button>

    return (
      <sl-element>
        <div>
          {toFirstPageButton}
          {toPreviousPageButton}
          {toNextPageButton}
          {toLastPageButton}
        </div>
      </sl-element>
    )
  }
})

const paginatorStyles = `
  .root {
    
  }
`
