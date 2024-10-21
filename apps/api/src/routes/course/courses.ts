// // In pages/api/courses.ts
// import { NextApiRequest, NextApiResponse } from 'next';
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     const courses = await prisma.Course.findMany({
//       include: {
//         lessons: true, 
//       },
//     });
//     res.status(200).json(courses);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch courses' });
//   }
// }


import { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabase = createClient(
  process.env.DATABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Fetch courses with lessons (assuming "lessons" is a related table)
    const { data: courses, error } = await supabase
      .from('courses') // Table name in Supabase
      .select('*, lessons(*)'); // Include lessons if needed

    if (error) throw error;

    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
}
