import Nullstack from 'nullstack'

import Home from './Home'
import './Application.css'

class Application extends Nullstack {

  prepare({ page }) {
    page.locale = 'pt-BR'
  }

  renderHead() {
    return (
      <head>
        <link href="https://fonts.gstatic.com" rel="preconnect" />
        <link href="https://fonts.googleapis.com/css2?family=Crete+Round&family=Roboto&display=swap" rel="stylesheet" />
 
      </head>
    )
  }

  render() {
    return (
      <body>
        <Head />
        <Home route="/" />
      </body>
    )
  }

}

export default Application
