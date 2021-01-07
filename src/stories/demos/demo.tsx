import { define, h } from 'js-elements'
import { DataExplorer } from 'js-cockpit'
import { DataTable } from 'js-cockpit'

import { DateField } from '../../main/components/date-field/date-field'

export default define('demo-app', () => {
  const columns = [
    {
      type: 'column',
      text: 'XXX'
    },
    {
      type: 'columnGroup',
      text: 'Name',
      columns: [
        {
          type: 'column',
          text: 'First name'
        },
        {
          type: 'column',
          text: 'Last name'
        }
      ]
    },
    {
      text: 'Address',
      type: 'columnGroup',
      columns: [
        {
          type: 'column',
          text: 'Street'
        },
        {
          type: 'column',
          text: 'Postcode'
        },
        {
          type: 'column',
          text: 'City'
        }
      ]
    }
  ]

  return () => (
    <div>
      <DataTable columns={columns} />
    </div>
  )
})
