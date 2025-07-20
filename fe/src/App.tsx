import img from "./assets/image.png";

export default function App() {
  return (
    <main className="bg-[#1E1E1E] min-h-screen flex flex-col md:flex-row gap-4 p-4">
      <section
        className=" rounded-sm w-full md:w-1/2 h-80 md:h-auto"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <section className="w-full md:w-[60%] h-48 md:h-full" />
    </main>
  );
}
