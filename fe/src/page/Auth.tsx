import img from "../assets/image.png";
// import Signin from "../components/auth/Signin";
import Register from "../components/auth/Register";
export default function Auth() {
  return (
    // bg-[#1E1E1E]
    <main className=" min-h-screen flex flex-col md:flex-row gap-4 p-4">
      <section
        className=" rounded-sm w-full md:w-1/2 h-80 md:h-auto"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className=" w-full md:w-[60%] min-h-screen md:h-full">
        {/* <Signin /> */}
        <Register />
      </div>
    </main>
  );
}
