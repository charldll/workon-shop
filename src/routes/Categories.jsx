import { useEffect, useState } from 'react';
import { Text, Flex, Spinner } from '@chakra-ui/react';
import axios from 'axios';

const Categories = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
		const fetchCategories = async () => {
			try {
				const response = await axios.get(
					"https://fakestoreapi.com/products/categories"
				);

				setCategories(response.data);
			} catch (error) {
				setError(true);
			} finally {
				setLoading(false);
			}
		};

		fetchCategories();
	}, []);

	return (
		<Flex gap={5} flexDir={"column"}>
			{loading && <Spinner size="xl" />}
			{error && <Text color="red">{"Error"}</Text>}
			{categories.map((category) => (
				<Text key={category}>{category}</Text>
			))}
			</Flex>
	);
};

export default Categories;