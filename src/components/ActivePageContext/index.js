import {createContext} from 'react'

const ActivePageContext = createContext({
  activePage: 1,
  changeActivePage: () => {},
})

export default ActivePageContext
