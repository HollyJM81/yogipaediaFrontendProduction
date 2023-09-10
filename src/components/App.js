import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "../components/ProtectedRoute";
import { UserAuthContextProvider } from "../context/UserAuthContext";

import LoginModal from "./LoginModal";
import SignUp from "./SignUp";
import Home from "./Home";
import PoseOfTheDay from "./PoseOfTheDay";
import PosesLibrary from "./PosesLibrary";
import MyFavourites from "./MyFavourites";

import "../styles/app.scss";

const App = () => {
	return (
		// <Container style={{ width: "100%" }}>
		// 	<Row>
		// 		<Col>
		<>
			<UserAuthContextProvider>
				<Routes>
					<Route
						path="/home"
						element={
							<ProtectedRoute>
								<Home />
							</ProtectedRoute>
						}
					/>
					<Route path="/" element={<LoginModal />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/home" element={<PoseOfTheDay />} />
					<Route path="/poses-library" element={<PosesLibrary />} />
					<Route path="/my-favourites" element={<MyFavourites />} />
				</Routes>
			</UserAuthContextProvider>
			{/* // 		</Col> */}
			{/* // 	</Row> */}
			{/* // </Container> */}
		</>
	);
};

export default App;
