import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
  // res.status(200).json({ text: 'Hello' });

  const prisma = new PrismaClient();

  // let result = await prisma.booking.create({
  //   data: {
  //     movieId: 's383',
  //     userId: '3sdd'
  //   }
  // });

  // console.log(result);
  // res.status(200).json(result);

  const result = await prisma.booking.findMany({});
  console.log(result);

  res.status(200).json(result);
}
