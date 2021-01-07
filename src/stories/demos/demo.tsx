import { define, h } from 'js-elements'
import { DataExplorer } from 'js-cockpit'
import { DataTable } from 'js-cockpit'

import { DateField } from '../../main/components/date-field/date-field'

export default define('demo-app', () => {
  const columns = [
    {
      text: 'Name',
      columns: [
        {
          text: 'First name'
        },
        {
          text: 'Last name'
        }
      ]
    },
    {
      text: 'Adress',
      columns: [
        {
          text: 'Street'
        },
        {
          text: 'Postcode'
        },
        {
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
