import { useParams } from 'react-router';
import useSWR from 'swr';
import { Alert, Spinner, Flex, Card, Image, Text, Button } from '@chakra-ui/react';

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
			{productData &&
				<Card.Root 
					key={productData.id}
					maxW="sm" 
					overflow="hidden" 
					background={"white"}>
						<Image
							src={productData.image}
							alt={productData.title}
							width={400}
							height={200}
							objectFit={"contain"}
							padding={2}/>
						<Card.Body gap="2">
							<Card.Title color={"#040706"}>
							{productData.title}
						</Card.Title>
					<Card.Description color={"#040706"}>
						{productData.description}
					</Card.Description>
						<Text 
							textStyle="2xl" 
							fontWeight="medium" 
							letterSpacing="tight" 
							mt="2" 
							color={"#040706"}>
								{`$${productData.price}`}
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
			}
		</Flex>
	);
};

export default Product;