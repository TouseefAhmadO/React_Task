import { Routes, Route } from "react-router-dom"
import OtherPagges from "../components/Pages/otherPages"
import Customers from "../components/Pages/customers"

const CRoutes = () => {
    return (
        <div className="h-100">
            <Routes>
                <Route path='/home' element={<OtherPagges />} />
                <Route path='/orders' element={<OtherPagges />} />
                <Route path='/products' element={<OtherPagges />} />
                <Route path='/customers' element={<Customers />} />
                <Route path='/analytics' element={<OtherPagges />} />
                <Route path='/marketing' element={<OtherPagges />} />
                <Route path='/discounts' element={<OtherPagges />} />
            </Routes>
        </div>
    )
}

export default CRoutes
