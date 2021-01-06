import { define, h } from 'js-elements'
import { useStyles } from 'js-elements/hooks'

class PaginationInfoProps {
  about: 'items' = 'items'
}

export const PaginationInfo = define('jsc-pagination-info', PaginationInfoProps, (
  p
) => {
  useStyles(pagiationInfoStyles)

  return () => {
    return <div class="root">Item 1-50 from 2.143</div>
  }
})

const pagiationInfoStyles = `
  .root {
    display: inline-block;
    font-family: var(--sl-font-sans);
  }
`
