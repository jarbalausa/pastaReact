// import React from 'react';
import PastaCard from './PastaCard';
import ErrorComponent from './Error';
import { useEffect, useState } from 'react';
import Loading from '../Loading';

// const pastas = [
//     { name: "Amatriciana spaghetti",
//       price: "1200",
//       imageUrl: "./pastaImages/1.webp" ,
//       inStock: true
//     },
//     { name: "Spaghetti ai frutti di mare",
//       price: "1200",
//       imageUrl: "./pastaImages/2.webp",
//       inStock: false
//      },
//     { name: "Spaghetti cozze", price: "1200", imageUrl: "./pastaImages/3.webp",
//       inStock: true
//      },
//     { name: "Picato spaghetti", price: "1200", imageUrl: "./pastaImages/4.jpeg",
//       inStock: false
//      },
//     { name: "Naislopa spaggetti", price: "2300", imageUrl: "./pastaImages/5.jpeg",
//         inStock: true
//      },
//     { name: "Kalfapani spaggetti", price: "3400", imageUrl: "./pastaImages/6.webp",
//         inStock: true
//      },
//     { name: "Lasdaopa spaggetti", price: "3300", imageUrl: "./pastaImages/7.jpeg" ,
//       inStock: true
//     },
//     { name: "Kelakap spaggetto", price: "1300", imageUrl: "./pastaImages/8.jpeg" },
//     { name: "Laknepos spaggetti", price: "2400", imageUrl: "./pastaImages/9.jpeg" },
//     { name: "Oasmapera spaggetti", price: "3300", imageUrl: "./pastaImages/10.jpeg" }
// ];

function PastaList() {
  const [isLoading , setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [pastas, setPastas ] = useState([]);

  useEffect(() =>{
    async function fetchPastas(){
      try {
          setIsLoading(true);
          const response = await fetch(
          "https://a1228d660d5ac9d6.mokky.dev/pastas"
           );
          const data = await response.json();
          setPastas(data);
      }  catch(err){
        setIsError(true);
        console.log(err);
        
      }finally{
        setIsLoading(false);
      }
    }
    fetchPastas();
  } ,[]);

  if (isError) {
    return <ErrorComponent/>;
  }
    return (
        <div className="home__row">
            {isLoading ? (< Loading/>) : (
              pastas.map((pasta) => (
                <PastaCard
                    key={pasta.id}
                    pasta={pasta}
                />
              ))
            )}
        </div>
    );
}

export default PastaList;
