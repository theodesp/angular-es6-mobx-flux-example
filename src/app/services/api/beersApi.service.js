class BeersApiService {
  constructor(apiService) {
    'ngInject';

    this.root_url = 'https://api.punkapi.com/v2/beers';
    this.api = apiService;
  }

  fetchBeer = (id, url = `${this.root_url}/${id}`) => {
    return this.api.fetch(url)
  };

  fetchRandomBeer = (url = `${this.root_url}/random`) => {
    return this.api.fetch(url);
  };

  fetchBeerArray = (page = 1, url = `${this.root_url}?page=${page}&per_page=10`) => {
    return this.api.fetch(url);
  };
}

export default BeersApiService;