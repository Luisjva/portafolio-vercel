import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { OrdenContext, MedidasContext } from ".";

export default function Img({ proyecto }) {
  const [lugar, setLugar] = useState(0);
  const { orden, reOrdenar } = useContext(OrdenContext);
  const { medidas } = useContext(MedidasContext);

  useEffect(() => {
    if (orden) {
      setLugar(orden.indexOf(proyecto.id));
    }
  }, [orden]);

  return (
    <div
      className={
        lugar === 0 ? `proy-img proy-img-abierto` : `proy-img proy-img-cerrado`
      }
      onClick={() => {
        reOrdenar(proyecto.id);
      }}
    >
      <Image
        src={`/${proyecto.img}`}
        alt="Picture of the author"
        layout="fill"
        priority
      />
      <style jsx>{`
        .proy-img {
          transition: ${0.3 + lugar / 10}s;
          position: absolute;
          overflow: hidden;
        }

        .proy-img-abierto {
          border-radius: 20px;
          height: ${medidas.height * 0.65}px;
          left: 10px;
          top: 10px;
          max-height: 500px;
          width: ${(medidas.height * 0.65) / 1.7}px;
        }

        .proy-img-cerrado {
          border-radius: 15px;
          top: ${(medidas.height * 0.65) / 2}px;
          transform: translateY(-50%);
          left: ${(medidas.height * 0.665) / 1.7 + 20 + 95 * (lugar - 1)}px;
          height: ${80 * 1.77}px;
          width: 80px;
          z-index: ${100 - lugar};
          cursor: pointer;
        }

        .proy-img-cerrado:hover {
          transform: translateY(-50%) scale(1.1);
        }

        @media screen and (min-width: 650px) {
          .proy-img-abierto {
            border-radius: 20px;
            height: ${medidas.height - 50}px;
            max-height: 500px;
            top: 25px;
            left: 15px;
            width: ${(medidas.height - 50) / 1.7}px;
          }

          .proy-img-cerrado {
            border-radius: 15px;
            top: ${medidas.height - 45}px;
            transform: translateY(-100%);
            left: ${medidas.height / 1.7 +
            17 +
            ((medidas.height * 0.4) / 1.7) * (lugar - 1)}px;
            height: ${medidas.height * 0.3}px;
            width: ${(medidas.height * 0.3) / 1.7};
            z-index: ${100 - lugar};
          }

          .proy-img-cerrado:hover {
            transform: translateY(-100%) scale(1.1);
          }
        }
      `}</style>
    </div>
  );
}
