import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Location from "./pages/Location";
import Careers from "./pages/Careers";

export const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/about',
				element: <About />,
			},
			{
				path: '/location',
				element: <Location />,
			},
			{
				path: '/careers',
				element: <Careers />,
			},
		],
	},
])