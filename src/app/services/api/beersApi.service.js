class BeersApiService {
  constructor(apiService) {
    'ngInject';

    this.root_url = 'https://api.punkapi.com/v2/beers';
    this.api = apiService;
  }

  fetchByName = (name, url = `${this.root_url}/?beer_name=${name}`) => {
    return this.api.fetch(url)
  };

  fetchRandom = (url = `${this.root_url}/random`) => {
    return this.api.fetch(url);
  };

  fetchArray = (page = 1, url = `${this.root_url}?page=${page}&per_page=10`) => {
    return this.api.fetch(url);
  };
}

export default BeersApiService;