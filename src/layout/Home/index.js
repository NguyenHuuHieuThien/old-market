import Navbars from "../../component/Navbars"
import Footer from "../../component/Footer"
import Products from "../../component/Product"
import SlideShow from "../../component/SlideShow"
export default function HomePage() {
    return (
        <div className="bg-main">
            <Navbars position='sticky-top'/>
            <SlideShow/>
            <div className="container mt-4">
                <Products />
            </div>
            <Footer />
        </div>
    )
}