import * as React from 'react';
import * as C from '@supreme-palm-tree/lib-ant-components';

const DefaultLayoutHeader = () => <C.Layout.Header>Header</C.Layout.Header>;

const DefaultLayoutFooter = () => <C.Layout.Footer>Footer</C.Layout.Footer>;

const defaultLayoutResponsiveColumn = {
  span: 24,
  xxl: { span: 20, offset: 2 },
};

const DefaultLayoutContentWrapper = ({
  children,
  responsiveColumn = defaultLayoutResponsiveColumn,
  outerMargin = 32,
}) => (
  <C.Layout.Content style={{ flex: '1' }}>
    <C.Row style={{ margin: outerMargin }}>
      <C.Col {...responsiveColumn}>{children}</C.Col>
    </C.Row>
  </C.Layout.Content>
);

export const Layout = ({
  children,
  responsiveColumn,
  outerMargin,
  customHeader: Header = DefaultLayoutHeader,
  customFooter: Footer = DefaultLayoutFooter,
  customContentWrapper: ContentWrapper = DefaultLayoutContentWrapper,
}) => (
  <C.Layout style={{ minHeight: '100vh' }}>
    {Header ? <Header /> : null}
    <ContentWrapper responsiveColumn={responsiveColumn} outerMargin={outerMargin}>
      {children}
    </ContentWrapper>
    {Footer ? <Footer /> : null}
  </C.Layout>
);
