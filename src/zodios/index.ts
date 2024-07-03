import { Zodios } from '@zodios/core';
import { ZodiosHooks } from '@zodios/react';
import customPlugin from './custom-plugin';
import jokesApi from './example/index';

// Example API url
const API_URL = 'https://official-joke-api.appspot.com';

// Zodios API client
const apiClient = new Zodios(API_URL, [...jokesApi]);

apiClient.use(customPlugin);
const api = new ZodiosHooks('jokesApi', apiClient);

export { api, apiClient };
