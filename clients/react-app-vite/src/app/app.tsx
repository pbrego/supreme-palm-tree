import * as React from 'react';
// import { ErrorHandlingAppExample } from '@supreme-palm-tree/lib-react-query';
import * as C from '@supreme-palm-tree/lib-ant-components';
import { AppWrapper } from '@supreme-palm-tree/lib-module-test';
import './styles.less';
import { LayoutWithSider } from './layout-with-sider';
import { List } from './layout-with-sider/list';

export function App() {
  const [isLoading] = React.useState(false);

  return <AppWrapper />
}

export default App;

