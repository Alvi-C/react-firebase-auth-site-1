import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../layouts/MainLayout';
import ErrorPage from '../pages/ErrorPage';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ServicePage from '../pages/ServicePage';
import EventsPage from '../pages/EventsPage';
import RentalPage from '../pages/RentalPage';
import CommunityPage from '../pages/CommunityPage';
import ContactPage from '../pages/ContactPage';
import LogInPage from '../pages/LogInPage';
import RegisterPage from '../pages/RegisterPage';
import EventDetailsPage from "../pages/EventDetailsPage";


const MyAppRouter = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <HomePage />,
				loader: () => fetch('/eventList.json'),
			},
			{
				path: '/about',
				element: <AboutPage />,
			},
			{
				path: '/service',
				element: <ServicePage />,
			},
			{
				path: '/events',
				element: <EventsPage />,
				loader: () => fetch('/eventList.json'),
			},
			{
				path: '/events/:id',
				element: <EventDetailsPage />,
				loader: () => fetch('/eventList.json'),
			},
			{
				path: '/rentals',
				element: <RentalPage />,
			},
			{
				path: '/community',
				element: <CommunityPage />,
			},
			{
				path: '/contact',
				element: <ContactPage />,
			},
			{
				path: '/login',
				element: <LogInPage />,
			},
			{
				path: '/register',
				element: <RegisterPage />,
			},
		],
	},
])

export default MyAppRouter;