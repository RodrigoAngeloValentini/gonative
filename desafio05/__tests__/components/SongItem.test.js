import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import Immutable from 'seamless-immutable';
// import { TouchableOpacity } from 'react-native';
// import { Creators } from '../../src/store/ducks/player';

import SongItem from '../../src/components/SongItem';

const playerFixture = require('./fixtures/player.json');
const songItemFixture = require('./fixtures/songItem.json');

const mockStore = configureStore([]);

const initialState = {
  player: Immutable({
    currentSong: playerFixture['/player/currentSong'],
    paused: false,
    loading: null,
    error: null,
    list: [],
  }),
};

const song = songItemFixture['/songItem/song'];

describe('Testing SongItem', () => {
  const store = mockStore(initialState);

  function createWrapper() {
    const wrapper = shallow(<SongItem onPress={() => {}} song={song} />, { context: { store } });
    return wrapper;
  }

  it('render as expected', () => {
    const wrapper = createWrapper();
    expect(wrapper.prop('player')).toEqual(initialState.player);
    expect(wrapper.dive().children().length).not.toBe(0);
  });
});
