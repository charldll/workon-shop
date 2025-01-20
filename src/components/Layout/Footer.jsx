import { Flex, Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Flex
			width={"100%"}
			alignItems={"center"}
			backgroundColor={"gray.400"}
			height={10}
			justifyContent={"center"}
			>
			<Text 
			fontSize={"xs"}
			color="black">
				Work-On Moneymaking Project (c) 2025.
				</Text>
    </Flex>
  );
};

export default Footer;