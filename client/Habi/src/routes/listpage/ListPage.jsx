import React, { Suspense } from "react";
import "./ListPage.scss";
import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card";
import MyMap from "../../components/map/MyMap";
import { Await, useLoaderData } from "react-router-dom";

const ListPage = () => {
  const data = useLoaderData();
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading Posts</p>}
            >
              {(postResponse) =>
                postResponse.data.map((post) => (
                  <Card key={post.id} item={post} />
                ))
              }
            </Await>
          </Suspense>
        </div>
      </div>
      <div className="mapContainer">
        <Suspense fallback={<p>Loading...</p>}>
          <Await
            resolve={data.postResponse}
            errorElement={<p>Error loading Posts</p>}
          >
            {(postResponse) => 
              <MyMap items={postResponse.data} />
            }
          </Await>
        </Suspense>
      </div>
    </div>
  );
};

export default ListPage;
