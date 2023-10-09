import { Outlet } from "react-router-dom";
import NavBar from "../components/header/NavBar";
import Footer from "../components/footer/Footer";


const MainLayout = () => {
    return (
			<div className='max-w-6xl mx-auto'>
				<NavBar />
				<Outlet />
				<Footer/>
			</div>
		)
};

export default MainLayout;