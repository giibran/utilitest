const sinon = require('sinon');
const configureMockStore = require('redux-mock-store').default;
const proxyquire = require('proxyquire');
const thunk = require('redux-thunk').default;

const buildObservableFn = (returnVal) => {
  const stub = sinon.stub();
  if(returnVal) stub.returns(returnVal);
  return stub;
};

const buildMockedReduxElements = ({moduleReplacements, initialState = {}, modulePath}) => {
  const mockStore = configureMockStore([thunk]);
  const store = mockStore(initialState);
  const module = proxyquire(modulePath, moduleReplacements);

  return { store, module };
};

module.exports = {
  buildObservableFn,
  buildMockedReduxElements
};
