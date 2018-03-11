import RNSound from 'react-native-sound/sound';
import { call, put, select } from 'redux-saga/effects';

import { Creators as PlayerActions } from 'store/ducks/player';

const Sound = new RNSound();

export function* play() {
  try {
    yield call(Sound.play);
  } catch (err) {
    console.tron.log(err);
  }
}

export function* pause() {
  try {
    yield call(Sound.pause);
  } catch (err) {
    console.tron.log(err);
  }
}

export function* setSong(action) {
  try {
    if (Sound.isLoaded()) yield call(Sound.release);

    const { song, list } = action.payload;

    yield call(Sound.init, song.file);
    yield call(play);

    yield put(PlayerActions.setSongSuccess(song, list));
  } catch (err) {
    yield put(PlayerActions.setSongFailure('Erro ao iniciar player'));
  }
}

export function* next() {
  try {
    const player = yield select(state => state.player);

    const currentIndex = player.list.findIndex(song => song.id === player.currentSong.id);
    const nextSong = player.list[currentIndex + 1];

    if (nextSong) {
      yield put(PlayerActions.setSongRequest(nextSong, player.list));
    }
  } catch (err) {
    console.tron.log(err);
  }
}

export function* previous() {
  try {
    const player = yield select(state => state.player);

    const currentIndex = player.list.findIndex(song => song.id === player.currentSong.id);
    const nextSong = player.list[currentIndex - 1];

    if (nextSong) {
      yield put(PlayerActions.setSongRequest(nextSong, player.list));
    }
  } catch (err) {
    console.tron.log(err);
  }
}
