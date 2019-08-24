import React from 'react'

import Menu from './Menu'

export default props => (

    <div className="sidebar" data-color="purple" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
        { 
/*             Tip 1: You can change the color of the sidebar using: data-color="purple | azure | green | orange | danger"

            Tip 2: you can also add an image using data-image tag */
        }
    <div className="logo">
      <a href="\#" className="simple-text logo-mini">
      <i className="fa fa-money fa-5x" aria-hidden="true"></i>
       <br></br><b>My Money App</b>
      </a>
    </div>
    <Menu></Menu>
  </div>

)