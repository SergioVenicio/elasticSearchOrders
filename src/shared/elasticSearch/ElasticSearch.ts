import { Client } from '@elastic/elasticsearch';

import IElastcSearch from './IElasticSearch';

const server = process.env.ES_SERVER || 'http://localhost:9200';

interface EsHit {
  _source: any
}
interface EsResponse {
  body: {
    hits: {
      total: {
        value: number
      },
      hits: EsHit[]
    }
  }
}

class ElasticSearch implements IElastcSearch {
  private client: Client;
  private index: string;

  constructor(index: string) {
    this.index = index;
    this.client = new Client({
      node: server,
    })
  }

  async search(body: any): Promise<any> {
    const response: EsResponse = await this.client.search({
      index: this.index,
      body
    })
    return response.body.hits.hits.map(h => h._source);
  }

  async create(id: string, body: any): Promise<any> {
    await this.client.create({
      index: this.index,
      type: '_doc',
      body,
      id
    })
  }

  async update(id: string, body: any): Promise<any> {
    await this.client.update({
      index: this.index,
      type: '_doc',
      body: {
        doc: {...body}
      },
      id
    })
  }
}

export default ElasticSearch;