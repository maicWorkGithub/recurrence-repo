import React from 'react'
import { Provider } from 'react-redux'
import { Admin, createAdminStore, Resource } from 'react-admin'
import { withTheme } from '@material-ui/core/styles'

import authProvider from './Providers/AuthProvider'
import dataProvider from './Providers/DataProvider'
// import Login from './Layout/Login'
import Layout from './Layout'
import Menu from './Layout/Menu'
import Dashboard from './Resources/dashboard'
import englishMessages from './config/i18n.en'

// const history = createBrowserHistory()
const store = createAdminStore({
  authProvider,
  dataProvider
})
const i18n = (locale) => englishMessages
const groupList = () => <p>Group List</p>

export default withTheme()((props) => {
  // got theme object here
  console.log(props)
  return <Provider store={store}>
    <Admin
      title="Posters Galore Admin"
      dataProvider={dataProvider}
      authProvider={authProvider}
      dashboard={Dashboard}
      appLayout={Layout}
      menu={Menu}
      i18nProvider={i18n}
    >
      <Resource name='groups' list={groupList}/>
    </Admin>
  </Provider>
})
