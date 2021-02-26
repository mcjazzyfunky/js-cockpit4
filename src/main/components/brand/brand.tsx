import { component, h } from 'js-elements'
import { useStyles } from 'js-elements/hooks'

class BrandProps {
  vendor?: string
  title?: string
  size: 'small' | 'medium' | 'large' | 'huge' = 'medium'
  multicolor?: boolean
}

export const Brand = component('jsc-brand', BrandProps, (p) => {
  useStyles(brandStyles)

  return () => {
    const vendor = p.vendor ? String(p.vendor).trim() : ''
    const title = p.title ? String(p.title).trim() : ''
    const textCount = Number(vendor) + Number(title)
    const rootClass = p.size === 'medium' ? 'root' : `root scale-${p.size}`
    const logoClass = p.multicolor ? 'logo logo-colored' : 'logo'

    return (
      <div class={rootClass}>
        <div class={logoClass}>
          <slot>{defaultLogo}</slot>
        </div>
        {textCount === 0 ? null : textCount === 1 ? (
          <div class="text">{vendor || title}</div>
        ) : (
          <div>
            {vendor ? <div class="vendor">{p.vendor}</div> : null}
            {title ? <div class="title">{p.title}</div> : null}
          </div>
        )}
      </div>
    )
  }
})

const defaultLogo = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
    <polyline points="2 17 12 22 22 17"></polyline>
    <polyline points="2 12 12 17 22 12"></polyline>
  </svg>
)

const brandStyles = `
  .root {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    display: inline-flex;
    align-items: center;
    justiy-content: center;
    white-space: nowrap;
    user-select: none;
  }

  .logo {
    flex-direction: row;
    align-items: center;
    padding-right: 0.5em;
  }

  .logo-colored {
    color: var(--sl-color-primary-500);
  }
  
  .text {
    font-size: 1.5em;
  }
  
  .vendor {
    font-size: .75em;
    line-height: 1;
    margin-bottom: -1px;
  }
  
  .title {
    font-size: 1.25em;
    line-height: 1;
  }
  
  .scaleMedium: {
    transform: scale(.95, .95);
  }
  
  .scale-small {
    transform: scale(.8, .8);
  }
  
  .scale-large {
    transform: scale(1.1, 1.1);
  }
  
  .scale-huge {
    transform: scale(1.2, 1.2);
  }
`
