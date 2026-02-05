import { useEffect, useState } from 'react'
import { supabase } from './lib/supabaseClient'
import { Container, Heading, Text, VStack, Box, Image, Flex } from '@chakra-ui/react'

function App() {
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      const cached = localStorage.getItem('units-cache')
      if (cached) {
        setData(JSON.parse(cached))
        setLoading(false)
      }

      const { data: units, error } = await supabase.from('units').select('*')

      if (error) {
        console.error('Erreur:', error)
      } else {
        setData(units)
        localStorage.setItem('units-cache', JSON.stringify(units))
      }
      setLoading(false)
    }

    fetchData()
  }, [])

  return (
    <Container maxW="container.md" py={10}>
      <VStack gap={6} align="stretch">
        <Heading>Mes Unités Spearhead</Heading>
        {loading ? (
          <Text>Chargement des renforts...</Text>
        ) : data.map((item) => (
          <Box key={item.id} p={0} overflow="hidden" borderWidth="1px" borderRadius="xl" bg="gray.800">
            <Flex direction={{ base: "column", md: "row"}}>
              <Image src={item.image_url} objectFit="cover" boxSize={{ base: "100%", md: "200px" }} />
              <VStack align="start" p={5} gap={2}>
                <Flex justify="space-between" width="100%" align="center">
                  <Heading size="md" color="white">{item.name}</Heading>
                </Flex>
                <Box>
                  <Text fontSize="xs" fontWeight="bold" color="gray.500" mb={1}>
                    MOT CLES
                  </Text>
                  <Text fontSize="sm" color="gray.300" fontStyle="italic">
                    {Array.isArray(item.keywords)
                      ? item.keywords.join(", ")
                      : item.keywords?.split(',').map((k: string) => k.trim()).join(', ')}
                  </Text>
                </Box>
              </VStack>
            </Flex>
          </Box>
        ))}
      </VStack>
    </Container>
  )
}

export default App