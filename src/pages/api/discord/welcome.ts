import { NextApiRequest, NextApiResponse } from 'next';

import getScreenshot from './_lib/chromium';
import getWelcomeTemplate from './_lib/welcomeTemplate';

interface IQueryParams {
  'username'?: string | string[];
  'discriminator'?: string | string[];
  'avatar-url'?: string | string[];
  'server-number'?: string | string[];
}

const isDev = !process.env.AWS_REGION;

export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    const query = req.query as IQueryParams;

    const username = query.username ? String(query.username) : undefined;
    const discriminator = query.discriminator ? String(query.discriminator) : undefined;
    const avatarURL = query['avatar-url'] ? String(query['avatar-url']) : undefined;
    const serverNumber = query['server-number'] ? String(query['server-number']) : undefined;

    if (!username) throw new Error('Username is required');
    if (!discriminator) throw new Error('Discriminator is required');
    if (!avatarURL) throw new Error('Avatar url is required');
    if (!serverNumber) throw new Error('Server number is required');

    const html = getWelcomeTemplate({
      username, discriminator, serverNumber, avatarURL,
    });

    const file = await getScreenshot(html, isDev);

    res.setHeader('Content-Type', 'image/png');
    res.setHeader('Cache-Control', 'public, immutable, no-tranform, s-maxage=31536000, max-age=31536000');

    return res.end(file);
  } catch (err) {
    console.log(err);

    return res.status(500).send('Internal server error');
  }
}
