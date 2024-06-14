import { useEffect, useState } from 'react';
import './index.css';
import { findAllService } from '../../services/emblem';
const CardList = () => {
  useEffect(() => {
    showEmblem();
  }, []);
  type cardList = {
    id: string | number;
    slug: string;
    name: string;
    image: string;
  };
  let [data, setData] = useState([]);

  let showEmblem = async () => {
    let response = await findAllService.userEmblems();
    setData(response.data.emblems);

    console.log(data);
  };

  return (
    <>
      {data.map((i: cardList) => {
        return (
          <>
            <div className="cardContainer">
              <div className="imageContainer">
                <img className="imageEmblem" src={i.image} alt={i.name} />
              </div>
              <div className="yellowBar">
                <h2 className="h2Name">{i.name}</h2>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default CardList;
