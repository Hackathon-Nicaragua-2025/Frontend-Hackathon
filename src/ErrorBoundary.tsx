// Import For React
import { Component, type ErrorInfo } from "react";

// Interface Error Boundary State
interface ErrorBoundaryState {
  hasError: boolean;
}

// Interface Error Props
interface ErrorProps {
  children: React.ReactNode;
}

// Class ErrorBoundary 
class ErrorBoundary extends Component<ErrorProps, ErrorBoundaryState> {
  // Constructor
  constructor(props: ErrorProps) {
    super(props)
    this.state = { hasError: false };
  }

  // Get Derived State From Error
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    console.log("Derived Error: ", error)
    return { hasError: true };
  }

  // Did Catch Error
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log("Error: ", error)
    console.log("ErrorInfo: ", errorInfo)
  }

  // Render
  render() {
    // If Has Error
    if (this.state.hasError) {
      return <h2>Algo Salio Mal</h2>
    }

    // Return Children
    return this.props.children
  }
}

// Export ErrorBoundary
export default ErrorBoundary;