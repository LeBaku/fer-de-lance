import { useEffect, useState } from 'react'
import { supabase } from './lib/supabaseClient'
import { Container, Heading, Text, VStack, Box, Image } from '@chakra-ui/react'

function App() {
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      const { data: units, error } = await supabase.from('units').select('*')

      if (error) {
        console.error('Erreur:', error)
      } else {
        setData(units || [])
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
        ) : data.length > 0 ? (
          data.map((item) => (
            <Box key={item.id} p={5} shadow="md" borderWidth="1px" borderRadius="md" bg="gray.300">
              <Heading size="md">{item.name}</Heading>
              <Text mt={2}>{item.size}</Text>
              <Image src={item.image_url} objectFit="cover" boxSize={{ base: "100%", md: "200px" }} />
            </Box>
          ))
        ) : (
          <Text>Aucune donnée trouvée. Vérifie ta table Supabase !</Text>
        )}
      </VStack>
    </Container>
  )
}

export default App