import './index.css';
const CardList = () => {
  type cardList = {
    Id: string | number;
    Slug: string;
    Name: string;
    Image: string;
  };
  const data: cardList[] = [
    {
      Id: 1,
      Slug: 'cda',
      Name: 'Cidade Alta',
      Image: 'https://cidadealtarp.com/imagens/challenge/cidade-alta.png',
    },
    {
      Id: 2,
      Slug: 'cda-valley',
      Name: 'Cidade Alta Valley',
      Image:
        'https://cidadealtarp.com/imagens/challenge/cidade-alta-valley.png',
    },
    {
      Id: 3,
      Slug: 'policia',
      Name: 'Policia do Cidade Alta',
      Image: 'https://cidadealtarp.com/imagens/challenge/policia.png',
    },
    {
      Id: 4,
      Slug: 'hospital',
      Name: 'Hospital do Cidade Alta',
      Image: 'https://cidadealtarp.com/imagens/challenge/hospital.png',
    },
    {
      Id: 5,
      Slug: 'mecanica',
      Name: 'Mecânica do Cidade Alta',
      Image: 'https://cidadealtarp.com/imagens/challenge/mecanica.png',
    },
    {
      Id: 6,
      Slug: 'taxi',
      Name: 'Taxi do Cidade Alta',
      Image: 'https://cidadealtarp.com/imagens/challenge/taxi.png',
    },
    {
      Id: 7,
      Slug: 'curuja',
      Name: 'Coruja',
      Image: 'https://cidadealtarp.com/imagens/challenge/coruja.png',
    },
    {
      Id: 8,
      Slug: 'hiena',
      Name: 'Hiena',
      Image: 'https://cidadealtarp.com/imagens/challenge/hiena.png',
    },
    {
      Id: 9,
      Slug: 'gato',
      Name: 'Gato',
      Image: 'https://cidadealtarp.com/imagens/challenge/gato.png',
    },
    {
      Id: 10,
      Slug: 'urso',
      Name: 'Urso',
      Image: 'https://cidadealtarp.com/imagens/challenge/urso.png',
    },
  ];

  return (
    <>
      {data.map((i: cardList) => {
        return (
          <>
            <div className="cardContainer">
              <div className="imageContainer">
                <img className="imageEmblem" src={i.Image} alt={i.Name} />
              </div>
              <div className="yellowBar">
                <h2 className="h2Name">{i.Name}</h2>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default CardList;
