function ProductDetails({setOpenPopup,body,title}) {
  return (
    <>
    <div  className="fixed bg-black inset-0 opacity-60 flex"></div>
      <div
      onClick={()=>setOpenPopup(false)}
      className="fixed inset-0 text-black  flex items-center justify-center ">
        {" "}
        <div onClick={(e)=>e.stopPropagation()} className="max-w-[700px] w-[95%]  border-2 border-black p-3 sm:p-10 z-20 opacity-100  shadow-2xl rounded-md bg-white fixed">
            <span
            onClick={(e)=>{e.stopPropagation()
                setOpenPopup(false)
            }}
            className="absolute top-1 cursor-pointer right-2 bg-black text-white rounded-full flex justify-center p-[2px] items-center w-5 h-5">X</span>
            <h1 className="text-lg font-bold mb-2 tracking-tight mt-2">{title}</h1>
            <p className="font-semibold text-zinc-800">{body}</p>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
