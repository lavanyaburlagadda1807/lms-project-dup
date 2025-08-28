import { createContext } from 'react'

const ActiveTabContext = createContext({
  activeTab: "INSTRUCTOR",
  toggleActiveTab: () => { },
})

export default ActiveTabContext
