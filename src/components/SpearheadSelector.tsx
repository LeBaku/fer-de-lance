import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { SimpleGrid, Spinner, Center, Text } from '@chakra-ui/react'
import { SpearheadCard } from './SpearheadCard'

export const SpearheadSelector = ({ onSelect }: any) => {
  const [spearheads, setSpearheads] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchSpearheads() {
      const { data, error } = await supabase
        .from('spearheads')
        .select('name, image_url, id')

      if (error) {
        console.error("Erreur Supabase :", error.message)
      } else {
        setSpearheads(data || [])
      }
      setLoading(false)
    }
    fetchSpearheads()
  }, [])

  if (loading) return (
    <Center py={10}><Spinner color="yellow.500" size="xl" /></Center>
  )

  if (spearheads.length === 0) return (
    <Center py={10}><Text color="gray.500">Aucune Spearhead trouvée.</Text></Center>
  )

  return (
  <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={6} w="full">
      {spearheads.map((s) => (
        <SpearheadCard 
          key={s.id} 
          name={s.name} 
          imageUrl={s.image_url} 
          onClick={() => onSelect(s.id, s.name)} 
        />
      ))}
    </SimpleGrid>
    );
};