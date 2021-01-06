import { define, h } from 'js-elements'
import { DataExplorer } from 'js-cockpit'

import { DateField } from '../../main/components/date-field/date-field'

export default define('demo-app', () => {
  return () => (
    <div>
      <DateField />
    </div>
  )
})
