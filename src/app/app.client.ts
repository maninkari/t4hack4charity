/**
 * Created by roberto on 17/06/2017.
 */
import { ApolloClient, createNetworkInterface } from 'apollo-client';

// Polyfill fetch
import 'whatwg-fetch';

// __SIMPLE_API_ENDPOINT_ looks similar to: `https://api.graph.cool/simple/v1/<PROJECT_ID>`
const networkInterface = createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/cj3zpqf4n54f501776feve209' });

export const client = new ApolloClient({ networkInterface });
