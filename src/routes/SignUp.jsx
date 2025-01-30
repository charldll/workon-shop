import {  
	Text,
	Flex, 
	Heading,
	Field,
	Input,
	Button,
	Center
	} from '@chakra-ui/react';

import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';

import validator from 'validator';
import axios from 'axios';

const SignUp = () => {

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const navigate = useNavigate();

	const onSubmit = async(data) => {
    try {
      console.log(data);
      const response = await axios.post("/auth/login", {
        username: "mor_2314",
        password: "83r5^_",
      });

      const { data: tokenData } = response;
      console.log(tokenData?.token);

    } catch (error) {
      console.log(error);
    }
  };

    return (
			<Center>
			<form onSubmit={handleSubmit(onSubmit)} noValidate>
			<Flex
			justifyContent={"center"}
			alignItems={"center"}
			flexDirection={"column"}
			gap={5}
			marginTop={20}
			padding={5}
			rounded={"md"}
			shadow={"sm"}>
				<Heading>Sign Up</Heading>

					<Field.Root invalid={!!errors?.email}>
						<Field.Label>Email</Field.Label>
							<Input
							placeholder="me@example.com"
							/>
						<Field.ErrorText>

						</Field.ErrorText>
					</Field.Root>

					<Field.Root>
						<Field.Label>
							<Input placeholder="test"/>
						</Field.Label>
						<Field.ErrorText>

						</Field.ErrorText>
					</Field.Root>

					<Field.Root>
						<Field.Label>
							<Input/>
						</Field.Label>
						<Field.ErrorText>

						</Field.ErrorText>
					</Field.Root>
					<Field.Root>
						<Field.Label>
							<Input/>
						</Field.Label>
						<Field.ErrorText>

						</Field.ErrorText>
					</Field.Root>

					<Button 
        colorPalette={"blue"} 
        type="submit"
        >
          Sign up
        </Button>
					<Text
					fontWeight={"small"}
					cursor={"pointer"}
					onClick={() => (
					navigate("/account")
					)}>&lt; go back</Text>
			</Flex>
			</form>
			</Center>
		);
};

export default SignUp;