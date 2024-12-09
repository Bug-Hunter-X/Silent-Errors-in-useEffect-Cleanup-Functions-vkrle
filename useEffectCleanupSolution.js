The solution involves wrapping the cleanup logic in a `try...catch` block to catch and handle any errors that might occur.

```javascript
useEffect(() => {
  const subscription = someDataStream.subscribe(data => {
    // ... process data ...
  });

  return () => {
    try {
      subscription.unsubscribe();
    } catch (error) {
      console.error('Error during cleanup:', error);
      // Optionally, implement more robust error handling here, 
      // such as reporting the error to an error tracking service.
    }
  };
}, []);
```

This approach ensures that any errors during cleanup are logged to the console, making them easier to identify and address.