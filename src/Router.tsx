import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { History } from './pages/History'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      {/* All routes that start with '/' have DefaultLayout */}
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>

      {/* Example, if a want default Layout to admin page */}
      {/* <Route path="/admin" element={<AdminLayout />}>
        <Route path="/products" element={<Home />} />
      </Route> */}
    </Routes>
  )
}
