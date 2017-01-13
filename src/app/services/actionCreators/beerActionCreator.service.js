import { dispatchAsync } from '../../common/appDispatcher';

class BeerActionCreator {
  constructor(beersApiService) {
    'ngInject';

    this.api = beersApiService;
  }

  requestBeer = (fullName) => {
    dispatchAsync(this.api.fetchByName(fullName), {
      request: 'REQUEST_BEER',
      success: 'REQUEST_BEER_SUCCESS',
      failure: 'REQUEST_BEER_ERROR'
    }, { fullName })
  }

  requestRandomBeer = () => {
    dispatchAsync(this.api.fetchRandom(), {
      request: 'REQUEST_RANDOM_BEER',
      success: 'REQUEST_RANDOM_BEER_SUCCESS',
      failure: 'REQUEST_RANDOM_BEER_ERROR'
    }, {})
  }
}

export default BeerActionCreator;