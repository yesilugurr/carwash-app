import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    if (process.env.NODE_ENV === 'production') {
      // Placeholder for reporting to Sentry or other service
      console.log('Reporting error to monitoring service', error, info);
    } else {
      console.error(error, info);
    }
    if (typeof window !== 'undefined') {
      alert('An unexpected error occurred.');
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <p>Something went wrong.</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
