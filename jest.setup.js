require("@testing-library/jest-dom");
const React = require("react");

// Mocking window.matchMedia for Jest
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

window.scrollTo = jest.fn();

// Mocking IntersectionObserver for framer-motion's whileInView
const mockIntersectionObserver = jest.fn();
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
});
window.IntersectionObserver = mockIntersectionObserver;

// A more robust mock for framer-motion that handles all motion components
// and filters out invalid props before passing them to the DOM.
jest.mock("framer-motion", () => {
  const framer = jest.requireActual("framer-motion");

  const motionComponent = (Component) => {
    const FramerComponent = React.forwardRef(({ children, ...props }, ref) => {
      const {
        initial,
        animate,
        exit,
        transition,
        variants,
        whileInView,
        whileHover,
        whileTap,
        whileFocus,
        viewport,
        ...rest
      } = props;
      return React.createElement(Component, { ...rest, ref }, children);
    });
    FramerComponent.displayName = `motion.${Component}`;
    return FramerComponent;
  };

  const motion = new Proxy(framer.motion, {
    get: (target, key) => {
      if (typeof key === "string") {
        return motionComponent(key);
      }
      return target[key];
    },
  });

  return {
    ...framer,
    AnimatePresence: ({ children }) =>
      React.createElement(React.Fragment, {}, children),
    motion: motion,
    useReducedMotion: () => true,
  };
});
