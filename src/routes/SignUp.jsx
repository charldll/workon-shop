import {  
	Text,
	Flex, 
	Heading,
	Field,
	Input,
	Button,
	Center,
	Badge,
	IconButton
	} from '@chakra-ui/react';

import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';

import validator from 'validator';
import axios from 'axios';

const SignUp = () => {
	
	const [showPassword, setShowPassword] = useState(false);
	const [showRepeatPassword, setShowRepeatPassword] = useState(false);

	const {
		register,
		watch,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const navigate = useNavigate();

	const watchPassword = watch("password");

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
							{...register("email", {
								required: true,
								validate: (value) => validator.isEmail(value) || "Invalid email",
							})}
							/>
							<Field.ErrorText>
							{errors?.email?.type === "required"
							? "Field required"
							: errors?.email?.message}
							</Field.ErrorText>
					</Field.Root>

					<Field.Root>
						<Field.Label>Name
							<Field.RequiredIndicator 
							fallback = {
								<Badge size="xs" variant="surface">Optional</Badge>
							}/>
						</Field.Label>
							<Input placeholder="(your name)" {...register("name")}/>
					</Field.Root>

					<Field.Root>
						<Field.Label>Password</Field.Label>
						<Flex width={"100%"}>
						<Input type={showPassword ? undefined : "password" }
						{...register("password", {
							required: true,
							validate: (value) => validator.isStrongPassword(value)
						})}
						/>
						<IconButton onClick={() => setShowPassword(!showPassword)}>
							{showPassword ? <EyeOff /> : <Eye />}
						</IconButton>
						</Flex>
					<Field.HelperText>
						Password must be at least 21 symbols long and include a capital letter,
						 two numbers, your personal security number, blood of your unborn child, and a symbol.
					</Field.HelperText>
					<Field.ErrorText>
						{errors?.password?.type === "required"
						? "Password doesn't meet the requirements"
						: errors?.password?.message}
						</Field.ErrorText>
					</Field.Root>
					
					<Field.Root>
						<Field.Label>Repeat password</Field.Label>
						<Flex width={"100%"}>
							<Input type={showPassword ? undefined : "password"}
							{...register("repeatPassword", {
								required: true,
								validate: (value) =>
									password === value || "The passwords are not the same",
							})}/>
							<IconButton onClick={() => setShowPassword(!showPassword)}>
							{showPassword ? <EyeOff /> : <Eye />}
						</IconButton>
						<Field.ErrorText>Passwords are not identical</Field.ErrorText>
						</Flex>
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