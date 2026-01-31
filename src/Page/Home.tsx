import Button from "../Componen/cart";

function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-4 items-center justify-center bg-gray-900 text-white">
      <h1 className="text-3xl font-bold">Home Page</h1>

      <Button label="Klik Aku" />
      <Button label="Tombol 2" />
    </div>
  );
}

export default Home;
