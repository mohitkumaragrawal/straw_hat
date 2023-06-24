import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const newBookingSchema = z.object({
  userId: z.string(),
  movieId: z.string(),
  theaterId: z.number(),
  row: z.number(),
  column: z.number(),
});

export default async function newBooking(req, res) {
  if (req.method === 'POST') {
    try {
      const prisma = new PrismaClient();

      const { userId, movieId, theaterId, row, column } = newBookingSchema.parse(req.body);

      const booking = await prisma.UserBooking.create({
        data: {
          userId,
          movieId,
          theaterId,
          row,
          column,
        },
      });

      res.status(200).json(booking);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Something went wrong.' });
    }
  } else {
    res.status(400).json({ error: 'Invalid request method.' });
  }
}
