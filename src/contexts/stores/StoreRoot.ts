import SingletonUserStore from './SingletonUserStore';

/**
 * This is a class that provides store context for React components.
 * Some of the individual stores are objects and are, therefore, already available as direct imports (for non-React uses).
 */
class StoreRoot {
  singletonUserStore: typeof SingletonUserStore;

  constructor() {
    this.singletonUserStore = SingletonUserStore;
  }
}

export default StoreRoot;
