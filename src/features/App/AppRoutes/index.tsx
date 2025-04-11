import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { RoutesPath } from 'src/types'

import Menu from 'src/pages/Menu'
import AddProject from 'src/pages/AddProject'
import ContactManager from 'src/pages/ContactManager'
import Services from 'src/pages/Services'
import Favorites from 'src/pages/Favorites'
import Basket from 'src/pages/Basket'
import Catalog from 'src/pages/Catalog'
import Description from 'src/pages/Description'

import MainLayout from 'src/features/Layout/MainLayout'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={RoutesPath.MENU} element={<Menu />} />
          <Route path={RoutesPath.ADD_PROJECT} element={<AddProject />} />
          <Route path={RoutesPath.CATALOG} element={<Catalog />} />
          <Route
            path={RoutesPath.CONTACT_MANAGER}
            element={<ContactManager />}
          />
          <Route path={RoutesPath.SERVICES} element={<Services />} />
          <Route path={RoutesPath.DESCRIPTION} element={<Description />} />
          <Route path={RoutesPath.FAVORITES} element={<Favorites />} />
          <Route path={RoutesPath.BASKET} element={<Basket />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRoutes
