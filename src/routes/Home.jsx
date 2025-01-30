import useSWR from 'swr';
import { 
	Flex, 
	Spinner, 
	Alert,
	SimpleGrid } from '@chakra-ui/react';
import ProductCard from '../components/ProductCard.jsx';
import { createListCollection } from '@chakra-ui/react';
import { useState } from 'react';

import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/components/ui/select"

const Home = () => {

	const [currentLimit, setCurrentLimit] = useState([4]);
	const [sortingDir, setSortDir] = useState(["asc"])

	const {
		data: products,
		error,
		isLoading,
	} = useSWR(`/products?sort=${sortingDir[0]}&limit=${currentLimit[0]}`);
	
	const productLimit = createListCollection({
  	items: [
    	{ label: "4", value: "4" },
    	{ label: "8", value: "8" },
    	{ label: "16", value: "16" },
  	],
	})

	const sortDir = createListCollection({
		items: [
			{ label: "Ascending", value: "asc" },
			{ label: "Descending", value: "desc" },
		],
	})

		return (
			<Flex
				justifyContent={"center"}
				alignItems={"center"}
				flexDirection={"column"}
				gap={"2"}
				>

				{isLoading && <Spinner size="xl"/>}
				{error && (
					<Alert.Root status="error" maxW={"400px"} marginTop={"20px"}>
						<Alert.Indicator />
							<Alert.Title>There was an error processing your request.</Alert.Title>
					</Alert.Root>
				)}

        <SelectRoot 
					collection={productLimit} 
					size="sm" 
					width="320px" 
					value={currentLimit} 
					onValueChange={(event) => setCurrentLimit(event.value)}
					>
            <SelectLabel>Select product limits on page</SelectLabel>
            	<SelectTrigger>
              	<SelectValueText placeholder="Select amount" />
            	</SelectTrigger>
            <SelectContent>
              {productLimit.items.map((limit) => (
                <SelectItem item={limit} key={limit.value}>
                  {limit.label}
                </SelectItem>
              ))}
            </SelectContent>
        	</SelectRoot>
				<SelectRoot 
					collection={sortDir} 
					size="sm" 
					width="320px" 
					value={sortingDir} 
					onValueChange={(event) => setSortDir(event.value)}>
            <SelectLabel>Select sorting direction on page</SelectLabel>
            	<SelectTrigger>
              	<SelectValueText placeholder="Select sorting direction" />
            	</SelectTrigger>
            <SelectContent>
              {sortDir.items.map((sort) => (
                <SelectItem item={sort} key={sort.value}>
                  {sort.label}
                </SelectItem>
              ))}
            </SelectContent>
        	</SelectRoot>
				
				<SimpleGrid columns={4} gap={2}>
				{products?.map((product) => (
					<ProductCard key={product.id} product={product}/>
				))}
				</SimpleGrid>
			</Flex>
		);
};

export default Home;