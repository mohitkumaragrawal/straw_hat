import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const readBookingSchema = z.object({
  userId: z.string()
});

export default async function readBooking(req, res) {
  if (req.method === 'POST') {
    try {
      const prisma = new PrismaClient();

      const { userId } = readBookingSchema.parse(req.body);

      const booking = await prisma.booking.findMany({
        where: {
          userId
        }
      });

      res.status(200).json({ booking });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Something went wrong.' });
    }
  }
}
