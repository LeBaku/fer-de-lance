import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { SimpleGrid, Spinner, Center } from '@chakra-ui/react'
import { UnitCard } from './UnitCard'

export const UnitList = ({ spearheadId }: { spearheadId: string }) => {
  const [units, setUnits] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchUnits() {
      setLoading(true)
      const { data, error } = await supabase
        .from('units')
        .select('*')
        .eq('spearhead_id', spearheadId)

      if (!error) setUnits(data || [])
      setLoading(false)
    }
    fetchUnits()
  }, [spearheadId])

  if (loading) return <Center py={10}><Spinner color="yellow.500" /></Center>

  return (
    <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={4} w="full">
      {units.map((unit) => (
        <UnitCard key={unit.id} unit={unit} />
      ))}
    </SimpleGrid>
  )
}