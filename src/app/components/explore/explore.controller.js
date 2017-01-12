import StateComponent from '../../common/stateComponent';

class ExploreController {
  constructor(BeerActionCreator) {
    'ngInject';

    this.props = {
      name: 'Bad Pixie',
      isRandom: false
    }

    this.state = this.props;
    this.actionCreator = BeerActionCreator;
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