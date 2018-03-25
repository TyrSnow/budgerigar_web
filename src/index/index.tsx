import * as React from 'react';

interface LoadableIndexState {
  Page?: any;
}
export default class LoadableIndex extends React.Component<any, LoadableIndexState> {
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
      return <Page {...this.props} />;
    } else {
      return (
        <div className="p-loading">加载中</div>
      );
    }
  }
}