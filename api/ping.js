const { createClient } = require('@supabase/supabase-js');
const db = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

module.exports = async function handler(req, res) {
  // Insertion d'une course factice dans le passé
  const { data, error } = await db.from('courses').insert({
    titre: '__ping__',
    date: '2000-01-01',
    sport: 'tri',
    lieu: 'ping',
  }).select('id').single();

  if (error) return res.status(500).json({ error: error.message });


  res.status(200).json({ ok: true, pinged: new Date().toISOString() });
};
