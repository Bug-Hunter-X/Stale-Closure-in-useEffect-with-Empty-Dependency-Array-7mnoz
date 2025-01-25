```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly attempting to log the count from within useEffect, leading to incorrect values
    console.log('Count:', count);
    return () => {
      // Cleanup function, but not directly related to the incorrect log
      console.log('Component unmounted');
    };
  }, []); // Empty dependency array means it runs only once after mount

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```