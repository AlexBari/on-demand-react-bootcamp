import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log({ error, errorInfo });
    }

    render() {
        const { hasError } = this.state;
        // eslint-disable-next-line react/prop-types
        const { children } = this.props;
        if (hasError) {
            return <h1>Oops, we done goofed up</h1>;
        }
        return children;
    }
}

export default ErrorBoundary;
