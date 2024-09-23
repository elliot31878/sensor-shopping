import React from "react";

interface ISafeComponentState {
  hasError: boolean;
}

export default class SafeComponent extends React.Component<
  React.PropsWithChildren,
  ISafeComponentState
> {
  constructor(props: {}) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {}

  render(): React.ReactNode {
    if (this.state.hasError) {
      return <h1>Somthing went wrong</h1>;
    }
    return this.props.children;
  }
}
