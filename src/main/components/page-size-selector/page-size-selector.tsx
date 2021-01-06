import { attr, define, h } from 'js-elements'
import { useStyles } from 'js-elements/hooks'
import { defineCustomElements, setAssetPath } from '@shoelace-style/shoelace'

defineCustomElements()

// === constants =====================================================

const PAGE_SIZE_OPTIONS = [10, 25, 50, 100, 250, 500]

// === PageSizeSelector ==============================================

class PageSizeSelectorProps {
  @attr(Number)
  pageSize = 25

  @attr(Boolean)
  disabled = false
}

export const PageSizeSelector = define('jsc-page-size-selector', PageSizeSelectorProps, (
  p
) => {
  const onSelect = () => {}

  useStyles(pageSizeSelectorStyles)

  return () => {
    return (
      <div class="root">
        Page size:
        <sl-select size="small" value="20">
          <sl-menu-item value="10">10</sl-menu-item>
          <sl-menu-item value="20">20</sl-menu-item>
          <sl-menu-item value="30">30</sl-menu-item>
        </sl-select>
      </div>
    )
  }
})

const pageSizeSelectorStyles = `
  .root {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    font-family: var(--sl-font-sans);
  }
`
