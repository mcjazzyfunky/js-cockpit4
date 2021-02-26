import { component, h } from 'js-elements'
import { useStyles } from 'js-elements/hooks'

// @ts-ignore
import defaultTheme from '../../themes/default-theme.css'

export const Cockpit = component('js-cockpit', () => {
  useStyles(defaultTheme)

  return () => {
    return (
      <span>
        <slot />
      </span>
    )
  }
})
