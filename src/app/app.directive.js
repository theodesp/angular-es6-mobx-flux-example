import './app.less';

const app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'vm'
  };
};

export default app;