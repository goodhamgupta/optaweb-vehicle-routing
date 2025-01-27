import { ActionType, RouteAction, RoutingPlan } from './types';

export const initialRouteState: RoutingPlan = {
  distance: 'no data',
  vehicles: [],
  depot: null,
  visits: [],
  routes: [],
};

export const routeReducer = (state = initialRouteState, action: RouteAction): RoutingPlan => {
  switch (action.type) {
    case ActionType.UPDATE_ROUTING_PLAN: {
      return action.plan;
    }
    default:
      return state;
  }
};
