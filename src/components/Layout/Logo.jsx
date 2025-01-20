import { Flex, Text, Icon  } from '@chakra-ui/react'
import { ShoppingBasket } from 'lucide-react'

const Logo = () => {
  return (
    <Flex 
		marginLeft={10} 
		alignItems={"center"} 
		gap={2}
    padding={1}
    shadow="xl"
    rounded={"xl"}>
      <Icon w={10} h={10} as={ShoppingBasket}/>
			<Text fontSize={"2xl"}
			fontWeight={"bold"}
			color="white"
			>
			Fake Store
			</Text>
		</Flex>
    )
}

export default Logo;

