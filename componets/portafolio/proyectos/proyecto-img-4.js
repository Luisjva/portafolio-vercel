import Image from "next/image";

export default function Img4({ width, img }) {
  return (
    <div className="img__contenedor">
      <div className="img1">
        <Image
          src={"/" + img[0] + ".png"}
          alt="Picture of the author"
          width={width / 3 - 8}
          height={width / 2 - 8}
        />
      </div>
      <div className="img2">
        <Image
          src={"/" + img[1] + ".png"}
          alt="Picture of the author"
          width={(width / 3) * 2 - 8}
          height={width / 2 - 8}
        />
      </div>
      <div className="img3">
        <Image
          src={"/" + img[2] + ".png"}
          alt="Picture of the author"
          width={(width / 3) * 2 - 8}
          height={width / 2 - 8}
        />
      </div>
      <div className="img4">
        <Image
          src={"/" + img[3] + ".png"}
          alt="Picture of the author"
          width={width / 3 - 8}
          height={width / 2 - 8}
        />
      </div>

      <style jsx>{`
        .img__contenedor {
          display: grid;
          grid-template-areas:
            "img1 img2 img2"
            "img3 img3 img4";
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: ${width / 2}px ${width / 2}px;
          height: ${width}px;
          width: ${width}px;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          padding: 0.25rem;
        }

        .img1,
        .img2,
        .img3,
        .img4 {
          align-items: center;
          display: flex;
          justify-content: center;
        }

        .img1 {
          grid-area: img1;
        }

        .img2 {
          grid-area: img2;
        }

        .img3 {
          grid-area: img3;
        }

        .img4 {
          grid-area: img4;
        }
      `}</style>
    </div>
  );
}
