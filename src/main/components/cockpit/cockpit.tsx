import { define, h } from 'js-elements'
import { useStyles } from 'js-elements/hooks'
import { SlIconLibrary } from '@shoelace-style/shoelace'

// @ts-ignore
import defaultTheme from '../../themes/default-theme.css'

export const Cockpit = define('js-cockpit', () => {
  useStyles(defaultTheme)

  return () => {
    return (
      <span>
        <slot />
      </span>
    )
  }
})
