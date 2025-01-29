import { useParams, useNavigate } from 'react-router';
import useSWR from 'swr';
import { 
	Flex, 
	Alert, 
	Center, 
	Spinner, 
	Text,
	Card,
	Button,
	SimpleGrid,
	Image } from '@chakra-ui/react';

const Category = () => {
  const { category } = useParams();
	const { 
		data: categoryData,
		error, 
		isLoading 
	} = useSWR(`/products/category/${category}`);

	const navigate = useNavigate();

	return (
		<Center>
			{isLoading && <Spinner size="xl"/>}
			{error && (
				<Alert.Root status="error" maxW={"400px"} marginTop={"20px"}>
					<Alert.Indicator />
						<Alert.Title>There was an error processing your request</Alert.Title>
				</Alert.Root>
			)}
			<Flex marginTop={2} marginBottom={2}>
				<SimpleGrid columns={3} gap={5}>
				{categoryData?.map((product) => (
						<Card.Root 
							key={product.id}
							maxW="sm" 
							overflow="hidden" 
							background={"white"}
							cursor={"pointer"}
							onClick={()=> {
								navigate(`/products/${product.id}`)
							}}
							>
							<Image
								src={product.image}
								alt={product.title}
								width={400}
								height={200}
								objectFit={"contain"}
								padding={2}/>
								<Card.Body gap="2">
									<Card.Title color={"#040706"}>
										{product.title}
									</Card.Title>
									<Card.Description color={"#040706"}>
										{product.description}
										</Card.Description>
									<Text 
										textStyle="2xl" 
										fontWeight="medium" 
										letterSpacing="tight" 
										mt="2" 
										color={"#040706"}>
											{`$${product.price}`}
									</Text>
								</Card.Body>
							<Card.Footer 
								gap="2" 
								backgroundColor={"#a4c5ce"} 
								paddingTop={5} 
								cursor={"default"}>
									<Button variant="solid">
										Buy now
									</Button>
									<Button 
										variant="outline" 
										colorPalette={"blue"} 
										color={"white"}>
										Add to cart
									</Button>
							</Card.Footer>
						</Card.Root>
				))}
				</SimpleGrid>
			</Flex>
		</Center>
	)
};

export default Category;