import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../../context/UserAuthContext";
import { auth } from "../../config/firebase";

const Signup = ({ setUserId, userId, currentUser, setCurrentUser }) => {
	const [email, setEmail] = useState("");
	const [error, setError] = useState("");
	const [password, setPassword] = useState("");
	const { signUp } = useUserAuth();
	let navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		try {
			await signUp(email, password);
			setUserId(auth.currentUser.uid);
			navigate("/home");
			localStorage.setItem("currentUser", auth.currentUser.uid);
			setCurrentUser(localStorage.getItem("currentUser"));

			setUserId(auth.currentUser.uid);
		} catch (err) {
			setError(err.message);
		}
	};

	return (
		<>
			<div className="sign-up__container">
				<div className="p-4 box">
					<h2 className="mb-3">Yogipaedia Signup</h2>
					{error && <Alert variant="danger">{error}</Alert>}
					<Form onSubmit={handleSubmit}>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Control
								type="email"
								placeholder="Email address"
								onChange={(e) => setEmail(e.target.value)}
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Control
								type="password"
								placeholder="Password"
								onChange={(e) => setPassword(e.target.value)}
							/>
						</Form.Group>

						<div className="d-grid gap-2">
							<Button variant="primary" type="Submit">
								Sign up
							</Button>
						</div>
					</Form>
				</div>
				<div className="p-4 box mt-3 text-center">
					Already have an account? <Link to="/">Log In</Link>
				</div>
			</div>
		</>
	);
};

export default Signup;
