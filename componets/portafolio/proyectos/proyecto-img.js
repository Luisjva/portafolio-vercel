export default function Img({ width, img }) {
  return (
    <div className="img__contenedor">
      <img className="img1" src={"/" + img[0] + ".png"} />
      <img className="img2" src={"/" + img[1] + ".png"} />
      <img className="img3" src={"/" + img[2] + ".png"} />
      <img className="img4" src={"/" + img[3] + ".png"} />

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
