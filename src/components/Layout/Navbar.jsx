import { Flex, Text, Icon  } from '@chakra-ui/react'

import Logo from './Logo'

const Navbar = () => {
  return (
	<Flex
		width="100%"
		alignItems={"center"}
		justifyContent={"space-between"}
		height={"70px"}
		position={"fixed"}
		backgroundColor={"blue.400"}
		shadow={"1g"}
		>
			<Logo />
		</Flex>
	)
};

export default Navbar;