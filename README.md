# Silent Errors in React Native useEffect Cleanup Functions

This repository demonstrates a common, yet difficult-to-debug issue in React Native: errors thrown within the cleanup function of a `useEffect` hook that are silently swallowed.

The `useEffectCleanupBug.js` file shows the problematic code.  The `useEffectCleanupSolution.js` demonstrates a robust solution.  The solution involves using a `try...catch` block to handle potential errors within the cleanup function and logging them for easier debugging.