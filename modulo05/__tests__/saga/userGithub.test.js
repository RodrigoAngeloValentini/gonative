import SagaTester from 'redux-saga-tester';
import MockAdapter from 'axios-mock-adapter';

import api from '../../src/services/api';
import rootSaga from '../../src/store/sagas';
import * as actions from '../../src/store/userActions';

const userGithubFixture = require('./fixtures/userGithub.json');

describe('Testing User Github SAGA', () => {
  let sagaTester = null;
  let apiMock = null;

  beforeEach(() => {
    sagaTester = new SagaTester({});
    apiMock = new MockAdapter(api.axiosInstance);

    sagaTester.start(rootSaga);
  });

  it('can add user', async () => {
    apiMock
      .onGet('/users/RodrigoAngeloValentini')
      .reply(200, userGithubFixture['/users/RodrigoAngeloValentini']);

    sagaTester.dispatch(actions.addUserRequest('RodrigoAngeloValentini'));

    await sagaTester.waitFor(actions.addUserSuccess().type);

    expect(sagaTester.getLatestCalledAction()).toEqual(
      actions.addUserSuccess(
        userGithubFixture['/users/RodrigoAngeloValentini'],
      ),
    );
  });

  it('throws erro when user doesnt exist', async () => {
    apiMock.onGet('/users/fail').reply(400);

    sagaTester.dispatch(actions.addUserRequest('fail'));

    await sagaTester.waitFor(actions.addUserFailure().type);

    expect(sagaTester.getLatestCalledAction()).toEqual(
      actions.addUserFailure(),
    );
  });
});
