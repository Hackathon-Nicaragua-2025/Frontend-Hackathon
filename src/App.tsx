// Import For React
import { Suspense } from "react"
// Import For RoutesF
import { renderRoutes, routes } from "./routes/Route"
// Import For Components
import { ScrollToTop } from './components'
// Import For Assets
import LogoNormal from './assets/image/LogoNormal.svg'

// Component App
function App() {
  return (
    // Page Loading
    <Suspense fallback={
      <div className="flex items-center justify-center h-dvh">
        <img src={LogoNormal} alt="Logo Avify" className="w-1/2" />
      </div>
    }>
      {/* Scroll To Top */}
      <ScrollToTop />
      {/* Page Tourist */}
      {renderRoutes(routes)}
    </Suspense>
  )
}

// Export App
export default App
