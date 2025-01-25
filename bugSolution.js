```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correctly logging the count using the current value
    console.log('Count:', count);
    return () => {
      console.log('Component unmounted');
    };
  }, [count]); // Add 'count' to the dependency array

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```