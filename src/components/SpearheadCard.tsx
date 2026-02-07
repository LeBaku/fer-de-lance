import { Box, Heading, Image } from '@chakra-ui/react'

export const SpearheadCard = ({ name, imageUrl, onClick }: any) => (
    <Box 
    onClick={onClick} 
    cursor="pointer" 
    transition="0.2s" 
    _hover={{ transform: "scale(1.02)", borderColor: "yellow.500" }}
    borderRadius="xl" overflow="hidden" bg="gray.800" borderWidth="1px" borderColor="gray.700"
  >
      <Image 
        src={imageUrl} 
        alt={name}
        objectFit="contain" 
      />
      
      <Box p={4} w="100%">
        <Heading size="sm" color="white" textTransform="uppercase" textAlign="center">
          {name}
        </Heading>
      </Box>
    </Box>
)