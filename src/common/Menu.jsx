import React from 'react'

import MenuItem from './MenuItem'

export default props => {

return (
  <div className="sidebar-wrapper">
    <ul className="nav">
      <MenuItem path="#/" label="Dashboard" icon="dashboard"></MenuItem>
      <MenuItem path="#/billing-cycle" label="Ciclos de Pagamento" icon="account_balance_wallet"></MenuItem>
    </ul>
  </div>
  )
}