declare module '@apiverve/fullyqualifieddomain' {
  export interface fullyqualifieddomainOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface fullyqualifieddomainResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class fullyqualifieddomainWrapper {
    constructor(options: fullyqualifieddomainOptions);

    execute(callback: (error: any, data: fullyqualifieddomainResponse | null) => void): Promise<fullyqualifieddomainResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: fullyqualifieddomainResponse | null) => void): Promise<fullyqualifieddomainResponse>;
    execute(query?: Record<string, any>): Promise<fullyqualifieddomainResponse>;
  }
}
