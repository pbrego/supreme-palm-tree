import * as React from 'react'

const DefaultItem:React.FC<{ item: any }> = ({ item }) => (
    <li>{item.name}</li>
)

export const List:React.FC<{
    data: any[];
    renderItem?: () => any;
    fetching?: boolean;
}> = ({
  data,
  renderItem: Item = DefaultItem,
  fetching
}) => {
  return (
        <>
            {fetching ? <>Updating...</> : null}
            <ul style={fetching ? { opacity: 0.4 } : null}>
                {data && data.map(item => <Item key={item.id} item={item}/>)}
            </ul>
        </>
  )
}
