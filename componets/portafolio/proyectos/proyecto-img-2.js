import Image from "next/image";

export default function Img3({ width, img }) {
  return (
    <div className="img__contenedor">
      <div className="img1">
        <Image
          src={"/" + img[0] + ".png"}
          alt="Picture of the author"
          width={width / 2 - 8}
          height={width - 8}
        />
      </div>
      <div className="img2">
        <Image
          src={"/" + img[1] + ".png"}
          alt="Picture of the author"
          width={width / 2 - 8}
          height={width - 8}
        />
      </div>

      <style jsx>{`
        .img__contenedor {
          display: grid;
          grid-template-areas: "img1 img2";
          grid-template-columns: ${width / 2}px ${width / 2}px;
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
      `}</style>
    </div>
  );
}
