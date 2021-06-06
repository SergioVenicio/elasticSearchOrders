interface IElastcSearch {
  create(id: string, body: any): Promise<any>
  update(id: string, body: any): Promise<any>
  search(body: any): Promise<any>
}

export default IElastcSearch;