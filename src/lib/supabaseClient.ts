import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.SUPABASE_URL
const supabaseAnonKey = import.meta.env.SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error ("Variables d'environnement Supabase manquantes dans le .env !")
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)