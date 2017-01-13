import StateComponent from '../../common/stateComponent';
import { pick, assign } from 'lodash';
import { autorun } from 'mobx';

class ExploreController {
  constructor(beerActionCreator, beerStore) {
    'ngInject';

    this.props = {
      name: 'Bad Pixie',
      isRandom: false
    }

    this.state = this.props;
    this.store = beerStore;
    this.actionCreator = beerActionCreator;
  }

  $onInit = () => {
    const selector = () => {
      const scopeData = pick(this.store, 'beer', 'isLoading');
      assign(this.state, scopeData);
    };

    this.mobxHandler = autorun(selector);
  }

  $onDestroy = () => {
    this.mobxHandler();
  }

  goFetch = (name) => {
    if (this.state.isRandom) {
      this.actionCreator.requestRandomBeer();
    } else {
      this.actionCreator.requestBeer(name);
    }
  }
}

export default ExploreController;