// traffic light

export type LightAction = 'red' | 'yellow' | 'green';

export interface LightState {
  red: boolean;
  yellow: boolean;
  green: boolean;
}

export function lightReducer(
  state: LightState,
  action: LightAction
): LightState {
  switch (action) {
    case 'red': {
      return {
        ...state,
        red: !state.red
      };
    }
    case 'yellow': {
      return {
        ...state,
        yellow: !state.yellow
      };
    }
    case 'green': {
      return {
        ...state,
        green: !state.green
      };
    }
  }
}
