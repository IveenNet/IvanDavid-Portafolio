import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: "" };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          <h2 className="text-red-500 text-xl font-semibold">
            Oops! Something went wrong. 😢
          </h2>
          <p className="text-gray-600 mt-2">Try refreshing the page or come back later.</p>
          <button
            onClick={this.handleReload}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Refresh Page 🔄
          </button>
          <details className="mt-4 text-sm text-gray-400">
            <summary>Technical Details</summary>
            <p>{this.state.errorMessage}</p>
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
