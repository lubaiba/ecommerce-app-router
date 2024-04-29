import Image from "next/image";
import Link from "next/link";

export default function Home() {
 
  return (
    <>
      <div>
        <Image src="/bgpic.jpg" alt="shoppingcart" width={1900} height={800} />
        <div
          className="position-absolute d-flex justify-content-center flex-column flex-wrap "
          style={{
            top: "300px",
            left: "90px",
          }}
        >
          <h3 className="text-danger fw-bold fs-2">SPECIAL OFFER</h3>
          <h1 className="text-primary-emphasis fs-1">MEGA SALE</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            consectetur urna blandit augue vehicula,<br></br> vel venenatis
            magna posuere. Suspendisse quis tincidunt risus.
          </p>
          <div>
            <Link href="/productList"><button className="btn btn-danger">Shop Now!</button></Link>
          </div>
        </div>
      </div>
    </>
  );
}
