class AppController {
  constructor(BeersApiService) {
    'ngInject'

    this.root_url = 'https://api.punkapi.com/v2/beers';
    this.api = BeersApiService;
  }

  fetchBeerArray = (page) => {
    return this.api.fetchBeerArray(page);
  }
}

export default AppController;