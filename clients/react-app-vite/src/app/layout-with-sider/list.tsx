import * as React from 'react';
import * as C from '@supreme-palm-tree/lib-ant-components';
import { ListLocale } from 'antd/lib/list';

const DefaultEmpty = ({ description }: { description: React.ReactNode }) => (
  <C.Empty description={description} image={C.Empty.PRESENTED_IMAGE_SIMPLE} />
);

const FetchCollection: React.FC<{
  data?: string[];
  renderItem?: () => JSX.Element;
  customEmpty?: () => JSX.Element;
  locale?: Record<string, React.ReactNode> & ListLocale;
  isLoading?: boolean;
  isFetching?: boolean;
  isError?: boolean;
  error?: string;
}> = ({
  data = ['1', '2'],
  renderItem = (item: string) => <C.List.Item>{item}</C.List.Item>,
  customEmpty: Empty = DefaultEmpty,
  locale = { emptyText: 'No Data', loadMoreButton: 'Load more' },
  isLoading,
  isFetching,
  isError,
  error,
}) => (
  <>
    {!isLoading ? (
      <>
        {isError ? <h3>{error}</h3> : null}
        {data ? (
          <C.List
            dataSource={data}
            itemLayout="horizontal"
            loading={isFetching}
            loadMore={
              <div
                style={{
                  textAlign: 'center',
                  marginTop: 12,
                  height: 32,
                  lineHeight: '32px',
                }}>
                <C.Button>{locale.loadMoreButton}</C.Button>
              </div>
            }
            locale={locale}
            renderItem={renderItem}
            split={false}
          />
        ) : (
          <Empty description={locale.emptyText} />
        )}
      </>
    ) : (
      'LoadingIndicator'
    )}
  </>
);

export const List = () => {
  return (
    <C.Card>
      <C.Typography.Title>Contact List</C.Typography.Title>
      <FetchCollection />
    </C.Card>
  );
};

// Create
// ======
// FetchContainer
// FetchContainerPage
// FetchContainerWidget
// FetchContainerList
