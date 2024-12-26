import { createPagesFunctionHandler } from '@remix-run/cloudflare-pages';

import { build } from '../build/server';

export const onRequest = createPagesFunctionHandler({ build });
