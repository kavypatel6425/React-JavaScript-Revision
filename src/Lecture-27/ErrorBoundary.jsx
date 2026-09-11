import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError() {
        return {
            hasError: true
        };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Error Caught:",error)
        console.error("Component Informestion:",errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h2>Something went wrong!</h2>
                    <p>This section is not available.</p>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;