import Popup from "../components/common/PopupKatchap";

export default function Ketchup() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center space-y-10 ">
      <h1 className="text-5xl font-bold ">المنتج الأكثر شعبياً </h1>
        <img src="/katchap.png" className="" />
        <Popup/>
    </div>
  )
}
