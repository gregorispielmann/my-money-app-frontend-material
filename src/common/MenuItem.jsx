import React, { useState } from 'react'

export default props => {

let [active, setActive] = useState('')

window.addEventListener('popstate', (e) => {
  let url = e.target.window.location.href
  url = url.replace('http://localhost:3000/','')
  if(url === props.path){
    setActive(active = true)
  } else {
    setActive(active = false)
  }
})

return(
  <li className={`nav-item ${active ? 'active' : ''}`}>
      <a className="nav-link" href={props.path}>
        <i className="material-icons">{props.icon}</i>
        <p>{props.label}</p>
      </a>
  </li>

)
}