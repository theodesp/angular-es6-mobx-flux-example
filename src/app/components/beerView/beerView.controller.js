import {assign} from 'lodash';

class BeerViewController {
  constructor() {
    this.props = {
      beer: null
    };
  }

  $onChanges = (changesObj) => {
    assign(this.props, {beer: changesObj.beer.currentValue});
  }
}

export default BeerViewController;