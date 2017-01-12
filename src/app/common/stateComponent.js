import { assign } from 'lodash';
import { action, Atom } from 'mobx';
import { isObjectShallowModified } from './utils';

class StateComponent {
  $onInit = () => {
    const makePropertyObservableReference = (propName) => {
      let valueHolder = this[propName];
      const atom = new Atom("reactive " + propName);
      Object.defineProperty(this, propName, {
        configurable: true,
        enumerable: true,
        get: function() {
          atom.reportObserved();
          return valueHolder;
        },
        set: function set(v) {
          if (isObjectShallowModified(valueHolder, v)) {
            valueHolder = v;
            atom.reportChanged();
          } else {
            valueHolder = v;
          }
        }
      })
    }

    makePropertyObservableReference('state');
  }

  @action
  setState = (newState) => {
    if (this.state) {
      _.assign(this.state, newState);
    } else {
      this.state = newState
    }
  }
}

export default StateComponent;