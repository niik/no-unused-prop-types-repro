import * as React from "react";

interface Props {
  readonly firstname: string;
  readonly lastname: string;
}

class TestComponent extends React.Component<Props> {
  public render() {
    return <div>{this.props.firstname}</div>;
  }
}
