import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import Immutable from 'seamless-immutable';
import { TouchableOpacity } from 'react-native';
import { Creators } from '../../src/store/ducks/player';

import Player from '../../src/components/Player';

const playerFixture = require('./fixtures/player.json');

const mockStore = configureStore([]);

describe('Testing Player', () => {
  it('render as expected when currentSong is null', () => {
    const initialState = {
      player: Immutable({
        currentSong: null,
        paused: false,
        loading: null,
        error: null,
        list: [],
      }),
    };

    const store = mockStore(initialState);
    const wrapper = shallow(<Player />, { context: { store } });

    expect(wrapper.prop('player')).toEqual(initialState.player);
    expect(wrapper.dive().children().length).toBe(0);
  });

  it('render as expected when currentSong is not null', () => {
    const initialState = {
      player: Immutable({
        currentSong: playerFixture['/player/currentSong'],
        paused: false,
        loading: null,
        error: null,
        list: [],
      }),
    };

    const store = mockStore(initialState);
    const wrapper = shallow(<Player />, { context: { store } });

    expect(wrapper.dive().children().length).not.toBe(0);
  });

  it('can play song', () => {
    const initialState = {
      player: Immutable({
        currentSong: playerFixture['/player/currentSong'],
        paused: true,
        loading: null,
        error: null,
        list: [],
      }),
    };

    const store = mockStore(initialState);
    const wrapper = shallow(<Player />, { context: { store } });

    wrapper
      .dive()
      .find(TouchableOpacity)
      .at(1)
      .simulate('press');

    expect(store.getActions()).toContainEqual(Creators.play());
  });

  it('can pause song', () => {
    const initialState = {
      player: Immutable({
        currentSong: playerFixture['/player/currentSong'],
        paused: false,
        loading: null,
        error: null,
        list: [],
      }),
    };

    const store = mockStore(initialState);
    const wrapper = shallow(<Player />, { context: { store } });

    wrapper
      .dive()
      .find(TouchableOpacity)
      .at(1)
      .simulate('press');

    expect(store.getActions()).toContainEqual(Creators.pause());
  });

  it('can got to previous song', () => {
    const initialState = {
      player: Immutable({
        currentSong: playerFixture['/player/currentSong'],
        paused: false,
        loading: null,
        error: null,
        list: [],
      }),
    };

    const store = mockStore(initialState);
    const wrapper = shallow(<Player />, { context: { store } });

    wrapper
      .dive()
      .find(TouchableOpacity)
      .at(0)
      .simulate('press');

    expect(store.getActions()).toContainEqual(Creators.previous());
  });

  it('can got to next song', () => {
    const initialState = {
      player: Immutable({
        currentSong: playerFixture['/player/currentSong'],
        paused: false,
        loading: null,
        error: null,
        list: [],
      }),
    };

    const store = mockStore(initialState);
    const wrapper = shallow(<Player />, { context: { store } });

    wrapper
      .dive()
      .find(TouchableOpacity)
      .at(2)
      .simulate('press');

    expect(store.getActions()).toContainEqual(Creators.next());
  });
});
