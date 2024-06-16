import { EmblemService, findAllService } from '../../services/emblem';
import './index.css';
import { useEffect, useState } from 'react';

type Emblem = {
  id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
};

const RedeemEmblem = () => {
  const [showGif, setShowGif] = useState(false);
  const [display, setDisplay] = useState('flex');
  const [cardInScreen, setCardInScreen] = useState(false);
  const [data, setData] = useState<Emblem>();
  const [emblemQuantity, setEmblemQuantity] = useState([]);
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    emblemQuantityFunction();
  }, []);

  let redeem = async () => {
    await emblemQuantityFunction();

    let response: any = await EmblemService.getNewEmblem();

    setData(response.data);

    setDisplay('none');
    setShowGif(true);
    setTimeout(() => {
      setShowGif(false);
      setCardInScreen(true);
    }, 2500);
    setTimeout(() => {
      setShowGif(false);
      setDisplay('flex');
      setCardInScreen(false);
    }, 7000);
  };

  let emblemQuantityFunction = async () => {
    let response = await findAllService.userEmblems();
    setEmblemQuantity(response.data.emblems);

    if (emblemQuantity.length >= 10) {
      setDisable(true);
      return false;
    }
  };

  return (
    <div className="buttonRedeemContainer">
      <button
        disabled={disable}
        className={`buttomRedeem ${display}`}
        onClick={redeem}
      >
        Redeem Emblem
      </button>

      {showGif && (
        <img
          className="gif"
          src="https://media1.giphy.com/media/rMrb8tapIjh9AvKXe5/giphy.gif?cid=6c09b952huxb3sil2mhm0bl33jxtqfmezobf4t108l8hf8td&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s"
          alt="GIF animado"
        />
      )}
      <div className={`card ${cardInScreen == false ? 'none' : 'flex'}`}>
        <div className="imageContainer">
          <img
            className="imageEmblemRedeem"
            src={data?.image || 'dd'}
            alt={data?.name || 'dsd'}
          />
        </div>
        <div className="yellowBar">
          <h2 className="h2Name">{data?.name || 'name'}</h2>
        </div>
      </div>
    </div>
  );
};

export default RedeemEmblem;
