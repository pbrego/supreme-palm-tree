import * as React from 'react';

const DefaultItem: React.FC<{ item: any }> = ({ item }) => <li>{item.name}</li>;

export const List: React.FC<{
  data: any[];
  renderItem?: () => any;
  fetching?: boolean;
}> = ({ data, renderItem: Item = DefaultItem, fetching }) => {
  return (
    <>
      {fetching ? <>Updating...</> : null}
      <ul style={{ opacity: fetching ? 0.4 : undefined }}>
        {data && data.map((item) => <Item item={item} key={item.id} />)}
      </ul>
    </>
  );
};
