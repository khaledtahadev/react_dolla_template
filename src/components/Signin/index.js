import React from "react";
import {
	Container,
	Form,
	FormButton,
	FormContent,
	FormH1,
	FormInput,
	FormLabel,
	FormWrap,
	Icon,
	Text,
} from "./SigninElements";

const Signin = () => {
	return (
		<Container>
			<FormWrap>
				<Icon to="/">dolla</Icon>
				<FormContent>
					<Form>
						<FormH1>Singin to your account</FormH1>
						<FormLabel htmlFor="for">Email</FormLabel>
						<FormInput type="email" required />
						<FormLabel>Password</FormLabel>
						<FormInput type="Password" required />
						<FormButton type="submit">Continue</FormButton>
						<Text>Forget password</Text>
					</Form>
				</FormContent>
			</FormWrap>
		</Container>
	);
};

export default Signin;
