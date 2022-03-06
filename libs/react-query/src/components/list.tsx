import * as React from 'react'

const DefaultItem = ({ item }) => (
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
            <ul style={{ opacity: fetching && 0.4 }}>
                {data.map(item => <Item key={item.id} item={item}/>)}
            </ul>
        </>
  )
}
