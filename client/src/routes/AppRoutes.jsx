import { Routes, Route } from 'react-router-dom'
import CoasterDetails from '../pages/CoasterDetails/CoasterDetails'
import CoastersPage from '../pages/CoastersPage/CoastersPage'
import HomePage from '../pages/HomePage/HomePage'
import NewCoasterPage from '../pages/NewCoasterPage/NewCoasterPage'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/galeria" element={<CoastersPage />} />
            <Route path="/crear" element={<NewCoasterPage />} />
            <Route path="/detalles/:coaster_id" element={<CoasterDetails />} />
        </Routes>
    )
}

export default AppRoutes