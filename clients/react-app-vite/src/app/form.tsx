import * as React from 'react';
import * as C from '@supreme-palm-tree/lib-ant-components';

export const Form = () => {
  return (
    <C.Card>
      <C.Typography.Title>Internal transfer</C.Typography.Title>

      <C.Form autoComplete="off" initialValues={{ remember: true }} layout="vertical" name="basic">
        <C.Form.Item label="Amount" name="amount" rules={[{ required: true, message: 'Please input an amount' }]}>
          <C.Input disabled />
        </C.Form.Item>
        <C.Form.Item
          label="Origin account"
          name="origin"
          rules={[{ required: true, message: 'Please input an amount' }]}>
          <C.Input />
        </C.Form.Item>
        <C.Form.Item label="Message" name="reference">
          <C.Input.TextArea placeholder="Enter a message here. It's totally optional" />
        </C.Form.Item>
        <C.Row gutter={[16, 16]}>
          <C.Col span={24}>
            <C.Button block htmlType="submit" type="primary">
              Continue
            </C.Button>
          </C.Col>
          <C.Col span={24}>
            <C.Button block>Cancel</C.Button>
          </C.Col>
        </C.Row>
      </C.Form>
    </C.Card>
  );
};
