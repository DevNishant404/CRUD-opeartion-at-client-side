function Loading() {
  return (
    
    <div className="mx-auto mt-52 w-fit flex flex-col justify-center items-center">
      <div className="w-10 h-10 bg-zinc-800 border-4 border-t-4 border-t-zinc-900 animate-spin  rounded-full"></div>
      <p className="mt-1">Loading<span className="animate-pulse text-xl">.....</span></p>
    </div>
  );
}

export default Loading;
