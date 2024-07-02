import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

export const env = createEnv({
  /**
   * The prefix that client-side variables must have. This is enforced both at
   * a type-level and at runtime.
   */
  clientPrefix: 'PUBLIC_',

  client: {
    PUBLIC_TEST: z.string().min(1),
  },

  runtimeEnv: process.env,

  emptyStringAsUndefined: true,
});
