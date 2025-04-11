import { Outlet } from 'react-router-dom'
import BackButton from 'src/components/ui/BackButton'

const MainLayout = () => {
  return (
    <div className="min-h-screen relative bg-dark-radial flex flex-col p-2 text-white overflow-x-hidden overscroll-contain touch-manipulation">
      <BackButton />
      <div className="flex-grow relative">
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
