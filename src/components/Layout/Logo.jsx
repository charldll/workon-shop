import { Flex, Text, Icon  } from '@chakra-ui/react'
import { Flower } from 'lucide-react'

const Logo = () => {
  return (
    <Flex 
		marginLeft={10} 
		alignItems={"center"} 
		gap={2}
    padding={1}
    shadow={"lg"}
    rounded={"xl"}>
      <Icon w={10} h={10} as={Flower} color={"white"}/>
			<Text fontSize={"2xl"}
			fontWeight={"bold"}
			color="white"
			>
			花火
			</Text>
		</Flex>
    )
}

export default Logo;

