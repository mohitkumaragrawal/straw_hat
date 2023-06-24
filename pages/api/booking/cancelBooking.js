import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const cancelBookingSchema = z.object({
  id: z.string()
});

export default async function cancelBooking(req, res) {
  if (req.method === 'POST') {
    try {
      const prisma = new PrismaClient();
      const { id } = cancelBookingSchema.parse(req.body);
      const booking = await prisma.UserBooking.delete({
        where: {
          id
        }
      });
      res.status(200).json({ booking });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Something went wrong.' });
    }
  }
}
