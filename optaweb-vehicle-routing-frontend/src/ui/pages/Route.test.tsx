import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import * as React from 'react';
import { UserViewport } from 'store/client/types';
import { Route, RouteProps } from './Route';

describe('Route page', () => {
  it('should render correctly with no routes', () => {
    const routes = shallow(<Route {...noRoutes} />);
    expect(toJson(routes)).toMatchSnapshot();
  });

  it('should render correctly with a few routes', () => {
    const routes = shallow(<Route {...twoRoutes} />);
    expect(toJson(routes)).toMatchSnapshot();
  });
});

const userViewport: UserViewport = {
  isDirty: false,
  zoom: 1,
  center: [0, 0],
};

const noRoutes: RouteProps = {
  addHandler: jest.fn(),
  removeHandler: jest.fn(),
  updateViewport: jest.fn(),

  boundingBox: null,
  userViewport,

  depot: null,
  visits: [],
  routes: [],
};

const depot = {
  id: 1,
  lat: 1.345678,
  lng: 1.345678,
};
const visit2 = {
  id: 2,
  lat: 2.345678,
  lng: 2.345678,
};
const visit3 = {
  id: 3,
  lat: 3.676111,
  lng: 3.568333,
};
const visit4 = {
  id: 4,
  lat: 4.345678,
  lng: 4.345678,
};
const visit5 = {
  id: 5,
  lat: 5.345678,
  lng: 5.345678,
};

const twoRoutes: RouteProps = {
  addHandler: jest.fn(),
  removeHandler: jest.fn(),
  updateViewport: jest.fn(),

  boundingBox: null,
  userViewport,

  depot,
  visits: [visit2, visit3, visit4, visit5],

  routes: [{
    vehicle: { id: 1, name: 'v1', capacity: 5 },
    visits: [depot, visit2, visit3],

    track: [],

  }, {
    vehicle: { id: 2, name: 'v2', capacity: 5 },
    visits: [depot, visit4, visit5],

    track: [],

  }],
};
