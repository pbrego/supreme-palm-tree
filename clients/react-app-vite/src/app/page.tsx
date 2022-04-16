import * as React from 'react';
import * as C from '@supreme-palm-tree/lib-ant-components';

const DefaultPageHeader = ({ title, description }) => (
  <C.Col span={24}>
    <C.Typography.Title>{title}</C.Typography.Title>
    <C.Typography.Paragraph>{description}</C.Typography.Paragraph>
  </C.Col>
);

const defaultPageResponsiveColumn = {
  span: 24,
  md: { span: 12, offset: 6 },
  xl: { span: 8, offset: 8 },
};

const DefaultPageContentWrapper = ({ children, responsiveColumn = defaultPageResponsiveColumn }) => (
  <C.Row>
    <C.Col {...responsiveColumn}>
      <C.Row gutter={[24, 24]}>{children}</C.Row>
    </C.Col>
  </C.Row>
);

export const Page = ({
  children,
  customHeader: Header = DefaultPageHeader,
  customContentWrapper: ContentWrapper = DefaultPageContentWrapper,
  responsiveColumn,
  title,
  isLoading = false,
  description,
}) => (
  <C.Spin tip="loading..." spinning={isLoading}>
    {isLoading ? (
      <></>
    ) : (
      <ContentWrapper responsiveColumn={responsiveColumn}>
        {Header ? <Header title={title} description={description} /> : null}
        {children}
      </ContentWrapper>
    )}
  </C.Spin>
);
