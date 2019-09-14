import React from 'react'

export default props => (
    <footer className="footer">
        <div className="container-fluid">
          <nav className="float-left">
            <ul>
              <li>
                <a href="https://www.pixeltech.com.br">
                  PIXELTECH
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright float-right">
            &copy;
              { new Date().getFullYear() } made with <i className="material-icons">favorite</i> by
            <a href="http://www.pixeltech.com.br" rel="noopener noreferrer" target="_blank"> Gregori Spielmann</a>.
          </div>
            {/* conteudo */}
        </div>
      </footer>
)