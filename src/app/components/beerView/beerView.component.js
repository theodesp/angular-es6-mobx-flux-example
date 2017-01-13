import template from './beerView.template.html';
import controller from './beerView.controller';
import './beerView.less';

const BeerViewComponent = {
  template,
  controller,
  controllerAs: 'vm',
  bindings: {
    beer: '<'
  }
};

export default BeerViewComponent;