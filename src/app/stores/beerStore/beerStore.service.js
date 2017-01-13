import { createApiActionHandler } from '../../common/utils';
import { observable, action } from 'mobx';
import { assign } from 'lodash';
import { register } from '../../common/appDispatcher';

class BeerModel {
  constructor(data) {
    // extendObservable(this, ..data);
    assign(this, ...data)
  }
}

class BeerStore {
  @observable isLoading = false;
  @observable beer;

  init = () => {
    this.dispatchToken = register((action) => {
      switch (action.type) {
        case 'REQUEST_BEER':
        case 'REQUEST_RANDOM_BEER':
          this.removeBeer();
          this.isLoading = true;
          break;
        case 'REQUEST_BEER_SUCCESS':
        case 'REQUEST_RANDOM_BEER_SUCCESS':
          this.handleLoadSuccess(action.response);
          break;
        case 'REQUEST_BEER_FAILURE':
        case 'REQUEST_RANDOM_BEER_FAILURE':
          this.handleLoadFailure(action.error);
          break;
      }
    });
  }

  /**
   * A todo was somehow deleted, clean it from the client memory
   */
  removeBeer = () => {
    this.beer = undefined;
  }

  @action handleLoadSuccess = (response) => {
    console.log(response);
    this.beer = new BeerModel(response.data);
    this.isLoading = false;
  }

  @action handleLoadFailure = (error) => {
    console.log(error);
    this.isLoading = false;
  }
}

export default BeerStore;