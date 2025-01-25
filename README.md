# Stale Closure Bug in React's useEffect Hook

This repository demonstrates a common issue in React applications involving stale closures within the `useEffect` hook when using an empty dependency array.  The code attempts to log the current state value but due to the closure capturing the initial value, the log always shows the initial value rather than the updated value.

## Problem

The primary issue is that the `console.log` statement inside the `useEffect` captures the initial value of the state variable (`count`) in its closure. Even though the `count` value updates, the `useEffect` function continues to use the initial value because it only runs once after mounting due to the empty dependency array.

## Solution

The solution involves correctly using the `count` state within the `useEffect` callback to log the updated value or remove the log from the `useEffect` if logging the updated value isn't necessary.  Alternatively, if logging is required, include the necessary dependencies for the `useEffect` to trigger re-evaluation.