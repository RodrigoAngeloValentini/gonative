import api from 'services/api';
import { call, put, select } from 'redux-saga/effects';

import { Creators as LoadingActions } from 'store/ducks/loading';
import { Creators as NotificationActions } from 'store/ducks/notification';
import { Creators as TodoActions } from 'store/ducks/todo';

const getUser = state => state.user;
const getCalendar = state => state.calendar;

export function* getTodoByDate(action) {
  yield put(LoadingActions.startLoading());

  const calendar = yield select(getCalendar);

  const response = yield call(api.get, `/todo/get-by-date/${calendar.date}`);

  switch (response.status) {
    case 500:
      yield put(NotificationActions.showNofitication('Erro ao buscar', true));

      yield put(TodoActions.todoListError());
      break;
    default:
      if (response.data) {
        yield put(TodoActions.todoListSuccess(response.data));
      } else {
        yield put(NotificationActions.showNofitication('Erro ao buscar', true));

        yield put(TodoActions.todoListError());
      }
  }

  yield put(LoadingActions.endLoading());
}

export function* newTodo(action) {
  yield put(LoadingActions.startLoading());

  const { title, description, datetime } = action.payload;

  const data = {
    title,
    description,
    datetime,
  };

  const response = yield call(api.post, '/todo', data);

  console.log(response);

  switch (response.status) {
    case 500:
      yield put(NotificationActions.showNofitication('Erro ao cadastrar', true));

      yield put(TodoActions.todoNewError());
      break;
    case 422:
      yield put(NotificationActions.showNofitication(response.data.error[0].message, true));

      yield put(TodoActions.todoNewError());
      break;
    default:
      if (response.data.id) {
        yield put(NotificationActions.showNofitication('Adicionado com sucesso', false));

        yield put(TodoActions.todoNewSuccess(response.data));
      } else {
        yield put(NotificationActions.showNofitication('Erro ao adicionar', true));

        yield put(TodoActions.todoNewError());
      }
  }

  yield put(LoadingActions.endLoading());
}

export function* deleteTodo(action) {
  yield put(LoadingActions.startLoading());

  const { id } = action.payload;

  const response = yield call(api.delete, `/todo/${id}`);

  // switch (response.status) {
  // }

  yield put(LoadingActions.endLoading());
}
