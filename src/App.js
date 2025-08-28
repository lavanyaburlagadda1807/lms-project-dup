import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useState } from 'react'

import './App.css'
import Home from './components/Home'
import ActiveTabContext from './components/ActiveTabContext'
import ActivePageContext from './components/ActivePageContext'

const App = () => {
  const [activeTab, setActiveTab] = useState("INSTRUCTOR")
  const [activePage, setActivePage] = useState(1)

  const toggleActiveTab = (tabId) => setActiveTab(tabId)
  const changeActivePage = (pageNum) => setActivePage(pageNum)

  return (
    <ActiveTabContext.Provider value={{ activeTab, toggleActiveTab }}>
      <ActivePageContext.Provider value={{ activePage, changeActivePage }}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </ActivePageContext.Provider>
    </ActiveTabContext.Provider>
  )
}

export default App
