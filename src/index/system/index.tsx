import * as React from 'react';

interface LoadableState {
  Page?: any;
}
export default class Loadable extends React.Component<any, LoadableState> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    import('./page').then(
      (Page) => {
        this.setState({
          Page: Page.default,
        });
      }
    );
  }
  render() {
    let { Page } = this.state;
    if (Page) {
      return <Page />;
    } else {
      return (
        <div className="p-loading">加载中</div>
      );
    }
  }
}