import Banner from "../components/Banner/Banner"
import AdvancedSearch from "../components/AdvancedSearch/AdvancedSearch"
import Header from "../components/common/Header/Header"
import TopDestinations from "../components/TopDestinations/TopDestinations.jsx"
import HotelBookingPage from "./HoteBooking/HotelBooking.jsx"
import Footer from "../components/common/Footer/Footer.jsx"


export const Home=()=>{
    return(
        <>
        <Header/>
        <Banner/>
        <AdvancedSearch/>
        <TopDestinations/>
        <HotelBookingPage/>
        <Footer/>

      
        </>
    )
}