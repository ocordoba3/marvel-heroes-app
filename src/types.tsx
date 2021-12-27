export interface Comic {
    id: number,
    title: string,
    creators: any[],
    price: number,
    thumbnail: {
      path: string,
      extension: string
    }
  }
export interface ComicResponse {
    id: number,
    title: string,
    creators: {
      items: any[]
    },
    prices: any[],
    thumbnail: {
      path: string,
      extension: string
    }
  }
  export interface ComicState {
    comics: Array<Comic>,
    isLoading: boolean,
  }