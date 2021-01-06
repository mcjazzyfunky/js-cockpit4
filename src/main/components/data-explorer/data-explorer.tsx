import { define, h } from 'js-elements'
import { useState, useStyles } from 'js-elements/hooks'
import { PageSizeSelector, Paginator, PaginationInfo } from 'js-cockpit'

class DataExplorerProps {
  title?: string
}

export const DataExplorer = define('jsc-data-explorer', DataExplorerProps, (
  p
) => {
  const [s, set] = useState({
    pageIndex: 2,
    pageCount: 125,
    pageSize: 25
  })

  useStyles(dataExplorerStyles)

  function renderHeader() {
    if (!p.title) {
      return null
    }

    return <div class="header">{p.title}</div>
  }

  function renderFooter() {
    return (
      <div class="footer">
        <div class="paginator">
          <Paginator pageIndex={s.pageIndex} pageCount={s.pageCount} />
        </div>
        <div class="page-size-selector">
          <PageSizeSelector pageSize={20} />
        </div>
        <div class="pagination-info">
          <PaginationInfo />
        </div>
      </div>
    )
  }

  return () => {
    return (
      <div>
        {renderHeader()}
        {renderFooter()}
      </div>
    )
  }
})

const dataExplorerStyles = `
  .root {
  }

  .footer {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    gap: 10px;
    padding: 4px 0 0 0;
    border: 0 solid var(--sl-color-gray-200);
    border-top-width: 1px;
  }

  .footer > * {
    white-space: nowrap;
  }

  .footer .paginator {
    text-align: left;
  }

  .footer .page-size-selector {
    width: 100%;
  }

  .footer .paginationInfo {
  }
`
