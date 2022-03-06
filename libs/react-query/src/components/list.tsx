import * as React from 'react'

const DefaultItem = ({ item }) => (
    <li>{item.name}</li>
)

export const List:React.FC<{
    data: any[];
    renderItem: (any) => React.FC;
    fetching: boolean;
}> = ({
  data,
  renderItem: Item = DefaultItem,
  fetching
}) => {
  return (
        <>
            {fetching ? <>Fetching...</> : null}
            <ul style={{ opacity: fetching && 0.4 }}>
                {data.map(item => <Item key={item.id} item={item}/>)}
            </ul>
        </>
  )
}
