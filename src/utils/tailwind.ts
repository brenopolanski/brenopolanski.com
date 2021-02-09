import resolveConfig from 'tailwindcss/resolveConfig';

import tailwindConfig from '../../tailwind.config.js';

// Reference: https://stackoverflow.com/questions/59982018/how-do-i-get-tailwinds-active-breakpoint-in-javascript
const fullConfig = resolveConfig(tailwindConfig);

export const getBreakpointValue = (value: string) =>
  +fullConfig.theme.screens[value].slice(0, fullConfig.theme.screens[value].indexOf('px'));

export const getCurrentBreakpoint = () => {
  let currentBreakpoint = 'xs';
  let biggestBreakpointValue = 0;

  for (const breakpoint of Object.keys(fullConfig.theme.screens)) {
    const breakpointValue = getBreakpointValue(breakpoint);

    if (typeof window !== 'undefined') {
      if (breakpointValue > biggestBreakpointValue && window.innerWidth >= breakpointValue) {
        biggestBreakpointValue = breakpointValue;
        currentBreakpoint = breakpoint;
      }
    }
  }

  return currentBreakpoint;
};
