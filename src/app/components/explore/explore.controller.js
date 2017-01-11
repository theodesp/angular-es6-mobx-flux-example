class ExploreController {
  constructor() {
    'ngInject';
    this.name = 'Bad Pixie';
  }

  fetch(name) {
    console.log(name);
  }
}

export default ExploreController;