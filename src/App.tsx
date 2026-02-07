import { Container, Heading, VStack, Text, Center } from "@chakra-ui/react"

function App() {
  return (
    <Container maxW="container.md" py={10}>
      <VStack gap={10} align="start">
        <VStack align="center" gap={1}>
          <Heading size="2xl" color="white" letterSpacing="tighter">
            FER-DE-LANCE
          </Heading>
          <Text color="yellow.500" fontSize="xs" fontWeight="bold" letterSpacing="widest">
            COMPAGNON TACTIQUE
          </Text>
        </VStack>
        <Center p={10} borderWidth="2px" borderStyle="dashed" borderColor="gray.700" borderRadius="xl">
          <VStack>
            <Text color="gray.500">Composant ici...</Text>
          </VStack>
        </Center>
      </VStack>
    </Container>
  )
}

export default App