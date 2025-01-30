import { useParams } from 'react-router';
import useSWR from 'swr';
import { 
	Alert,
	Spinner, 
	Flex, 
	Image, 
	Text, 
	Button,
	SimpleGrid } from '@chakra-ui/react';

const Product = () => {
	const { product } = useParams();
	const {
		data: productData,
		error,
		isLoading
	} = useSWR(`/products/${product}`);

  return (
		<Flex>
			{isLoading && <Spinner size="xl"/>}
			{error && (
				<Alert.Root status="error" maxW={"400px"} marginTop={"20px"}>
					<Alert.Indicator />
						<Alert.Title>There was an error processing your request.</Alert.Title>
				</Alert.Root>
			)}
			{productData && (
					<Flex 
					key={productData.id} 
					marginTop={10} 
					marginBottom={10}
					padding={30}>
						<SimpleGrid columns={2} gap={5}>
							<Flex>
							<Image
								src={productData.image}
								alt={productData.title}
								width={400}
								height={400}
								objectFit={"contain"}
								padding={2}/>
								</Flex>
							<Flex
								flexDirection={"column"}
								alignItems={"center"}>
							<Text
								fontWeight={"bold"}
								fontSize={"20px"}>
								{productData.title}
							</Text>
							<Text>
								{productData.description}
							</Text>
							<Text 
								textStyle="2xl" 
								fontWeight="medium" 
								letterSpacing="tight" 
								mt="2" 
								color={"#040706"}>
									{`$${productData.price}`}
							</Text>
							<Button variant="solid">
								Buy now
							</Button>
							<Button 
								variant="outline" 
								colorPalette={"blue"} 
								color={"white"}>
								Add to cart
							</Button>
							</Flex>
						</SimpleGrid>
					</Flex>
			)}
		</Flex>
	);
};

export default Product;