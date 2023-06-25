import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';
import { PrismaClient } from '@prisma/client';

const authUsers = ['google-oauth2|106082478183621178739'];

export default withApiAuthRequired(async function handler(req, res) {
  const session = await getSession(req, res);
  console.log(session.user.sub);

  if (!authUsers.includes(session.user.sub)) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const prisma = new PrismaClient();

  const result = await prisma.theater.create({
    data: req.body
  });
  console.log(req.body);
  res.status(200).json(result);
});
