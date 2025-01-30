import { 
  Heading,
  Flex, 
  Field,
  Input,
  Center,
  IconButton,
  Button,
  Text
  } from '@chakra-ui/react';

import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

import validator from 'validator';
import axios from 'axios';

const Account = () => {

  const [showPassword, setShowPassword] = useState(false);

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
    shadow={"sm"}
    minW={"400px"}
    >

      <Heading>Sign In</Heading>

      {/* <Field.Root invalid={errors?.email ? true : false}> */}
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

      <Field.Root invalid={!!errors?.password}>
        <Field.Label>Password</Field.Label>
          <Flex width={"100%"}>
            <Input type={showPassword ? undefined : "password"}
            {...register("password", {
              required: true
            })}
            />
            <IconButton onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <EyeOff /> : <Eye />}
            </IconButton>
          </Flex>
          <Field.ErrorText>Password required</Field.ErrorText>
        </Field.Root>

        <Button 
        colorPalette={"blue"} 
        type="submit"
        >
          Sign in
        </Button>

        <Text
        fontSize={"small"}
        cursor={"pointer"}
        onClick={() => (
          navigate("/account/signup")
        )}>
          Don't have an account yet? <u>Sign up!</u>
          </Text>
    </Flex>
    </form>
    </Center>
  );
};

export default Account;