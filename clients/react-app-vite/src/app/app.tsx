import * as React from 'react';
// import { ErrorHandlingAppExample } from '@supreme-palm-tree/lib-react-query';
import * as C from '@supreme-palm-tree/lib-ant-components';
import './styles.less';

import { Layout } from './layout';
import { Page } from './page';

const Container = ({ children, span = 24 }: { children: React.ReactNode; span: number }) => (
  <C.Col span={span}>{children}</C.Col>
);

export function App() {
  const [isLoading] = React.useState(false);

  return (
    <Layout>
      <Page description="Move money between your own accounts" isLoading={isLoading} title="Transfer funds">
        <Container>
          <Form />
        </Container>
      </Page>
    </Layout>
  );
}

export default App;

const Form = () => (
  <C.Form name="basic" layout="vertical" initialValues={{ remember: true }} autoComplete="off">
    <C.Form.Item label="Amount" name="amount" rules={[{ required: true, message: 'Please input an amount' }]}>
      <C.Input disabled />
    </C.Form.Item>
    <C.Form.Item label="Origin account" name="origin" rules={[{ required: true, message: 'Please input an amount' }]}>
      <C.Input />
    </C.Form.Item>
    <C.Form.Item label="Message" name="reference">
      <C.Input.TextArea placeholder="Enter a message here. It's totally optional" />
    </C.Form.Item>
    <C.Row gutter={[16, 16]}>
      <C.Col span={24}>
        <C.Button type="primary" htmlType="submit" block>
          Continue
        </C.Button>
      </C.Col>
      <C.Col span={24}>
        <C.Button block>Cancel</C.Button>
      </C.Col>
    </C.Row>
  </C.Form>
);
