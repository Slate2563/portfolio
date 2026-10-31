
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom'

import SiteLayout from './components/layout/SiteLayout'

import HomePage from './pages/HomePage'
import ProjectDetailsPage from './pages/ProjectDetailsPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/projects/:projectId"
            element={<ProjectDetailsPage />}
          />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
