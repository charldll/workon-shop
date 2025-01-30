import { useParams } from 'react-router';
import useSWR from 'swr';
import {
	Alert, 
	Flex, 
	Spinner,
	SimpleGrid } from '@chakra-ui/react';

import ProductCard from '@/components/ProductCard';

const Category = () => {
  const { category } = useParams();
	const { 
		data: categoryData,
		error, 
		isLoading 
	} = useSWR(`/products/category/${category}`);


	return (
		<Flex
			justifyContent={"center"}>
			{isLoading && <Spinner size="xl"/>}
			{error && (
				<Alert.Root status="error" maxW={"400px"} marginTop={"20px"}>
					<Alert.Indicator />
						<Alert.Title>There was an error processing your request</Alert.Title>
				</Alert.Root>
			)}
			<SimpleGrid columns={3} gap={5}>
			{categoryData?.map((product) => (
				<ProductCard key={product.id} product={product}/>
			))}
			</SimpleGrid>
		</Flex>
	)
};

export default Category;