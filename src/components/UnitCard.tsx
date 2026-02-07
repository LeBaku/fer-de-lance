import { Box, Heading, Image, Text, VStack, Separator } from '@chakra-ui/react'

interface UnitCardProps {
  unit: {
    name: string;
    image_url: string;
    keywords?: string;
  }
}

export const UnitCard = ({ unit }: UnitCardProps) => {
  const formatKeywords = (kw: any) => {
    if (!kw) return "Aucun mot-clé";
    return Array.isArray(kw) 
      ? kw.join(", ") 
      : kw.split(',').map((s: string) => s.trim()).join(', ');
  };

  return (
    <Box 
      bg="gray.800" 
      borderRadius="xl" 
      overflow="hidden" 
      borderWidth="1px" 
      borderColor="gray.700"
    >
      <Box bg="black" display="flex" justifyContent="center">
        <Image 
          src={unit.image_url} 
          alt={unit.name}
          maxH="250px"
          objectFit="contain"
          p={2}
        />
      </Box>
      <VStack align="stretch" p={4} gap={3}>
        <Heading size="md" color="white" textTransform="uppercase">
          {unit.name}
        </Heading>
        <Separator borderColor="gray.600" />

        <Box>
          <Text fontSize="xs" fontWeight="bold" color="yellow.500" mb={1} letterSpacing="widest">
            MOTS-CLÉS
          </Text>
          <Text fontSize="sm" color="gray.300" fontStyle="italic">
            {formatKeywords(unit.keywords)}
          </Text>
        </Box>
      </VStack>
    </Box>
  )
}