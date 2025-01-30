import { useNavigate } from 'react-router';
import { 
	Flex,
	Image,
	Text,
	Card,
	Button } from '@chakra-ui/react';

const ProductCard = ({product}) => {
  
	const navigate = useNavigate();

	return (
		<Flex marginTop={2} marginBottom={2}>
			{product && (
				<Card.Root
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
					<Card.Body>
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
				)}
			</Flex>
	);
};

export default ProductCard;