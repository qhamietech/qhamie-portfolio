import { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'

function App() {
  const [visitCount, setVisitCount] = useState(null)

  useEffect(() => {
    const trackVisit = async () => {
      await supabase.from('visits').insert([{}])
      const { count } = await supabase
        .from('visits')
        .select('*', { count: 'exact', head: true })
      setVisitCount(count)
    }
    trackVisit()
  }, [])

  // visitCount is available anywhere in your component
}