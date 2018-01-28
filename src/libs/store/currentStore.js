import configureStore from './configureStore';

// To modify if we want to set an initial state to the application.
const initialState = {};

// The instance of the current store shared in the application.
const currentStore = configureStore(initialState);

export default currentStore;
