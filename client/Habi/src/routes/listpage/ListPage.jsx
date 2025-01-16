import React from 'react';
import "./ListPage.scss";
import Filter from '../../components/filter/Filter';
import Card from '../../components/card/Card';
import MyMap from '../../components/map/MyMap';
import { useLoaderData } from 'react-router-dom';


const ListPage = () => {
  const posts = useLoaderData();
  return (
    <div className='listPage'>
        <div className="listContainer">
          <div className="wrapper">
            <Filter />
            {posts.map(item=>(
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div className="mapContainer">
          <MyMap items={posts}/>
        </div>
    </div>
  )
}

export default ListPage;