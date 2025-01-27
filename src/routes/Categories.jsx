import useSWR from 'swr';
import { Text, 
	Flex, 
	Spinner, 
	Card, 
	Box } from '@chakra-ui/react';
import { Link } from 'react-router';

const Categories = () => {
  const {data: categories, error, isLoading} = useSWR("/products/categories");

	return (
		<Flex
			gap={"30px"}
			marginTop={"20px"}
			justifyContent={"center"}>

				{isLoading && <Spinner size="xl" />}
				{error && <Text color="red">{"Error"}</Text>}

				{categories?.map((category) => (
				<Link key={category} to={`/categories/${category}`}>
					<Card.Root 
						width="320px"
						background={"#a4c5ce"}
						variant={"elevated"}
						_hover={{
							transform: "scale(1.05)",
							cursor: "pointer"
						}}
						transition={"all ease-in-out 0.3s"}
					>
						<Card.Body>
							<Box
								value={category}
								fontWeight={"bold"}
								fontSize={"lg"}
								textTransform={"uppercase"}
								fontFamily={"Tahoma"}
								color={"#040706"}
								justifyContent={"center"}>
									{category}
							</Box>
						</Card.Body>
					</Card.Root>
				</Link>
			))}
		</Flex>
	);
};

export default Categories;