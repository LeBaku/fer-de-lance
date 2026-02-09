import { useState } from 'react'
import { Box, VStack, Text, Container, Flex, Button } from '@chakra-ui/react'
import { SpearheadSelector } from './components/SpearheadSelector'
import { UnitList } from './components/UnitList'

function App() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedName, setSelectedName] = useState<string>("");

  const handleSelect = (id: string, name: string) => {
    setSelectedId(id);
    setSelectedName(name);
  };

  return (
    <Box minW="100vw" minH="100vh" bg="gray.900" color="white">
      <Flex as="header" w="100%" bg="gray.800" h="70px" align="center" justify="center" borderBottom="2px solid" borderColor="yellow.600" position="sticky" top="0" zIndex="10">
        <VStack gap={0}>
          <Text fontWeight="black" fontSize="xl">{selectedId ? selectedName : "FER DE LANCE"}</Text>
          <Text fontSize="xs" color="yellow.500" fontWeight="bold">COMPAGNON TACTIQUE</Text>
        </VStack>
      </Flex>

      <Container maxW="8xl" px={4} py={6}>
        {selectedId ? (
          <VStack align="stretch" gap={6}>
            <Button
              bg="gray.800"
              borderColor="yellow.500"
              color="yellow.500" 
              onClick={() => setSelectedId(null)}
              alignSelf="flex-start"
              px={1}
            >
              ← Retour aux armées
            </Button>
            <UnitList spearheadId={selectedId} />
          </VStack>
        ) : (
          <SpearheadSelector onSelect={handleSelect} />
        )}
      </Container>
    </Box>
  )
}
export default App