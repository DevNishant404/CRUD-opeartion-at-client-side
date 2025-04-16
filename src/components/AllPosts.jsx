import { deltepost, getPost } from "../api/PostApi";
import { useState, useEffect } from "react";
import Loading from "./Loading/Loading";
import ProductDetails from "./ProductDetails";
function AllPosts() {
  const [apidata, setApidata] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [selectPost, setSelectPost] = useState(null);

  async function getPostData() {
    setisLoading(true);

    let res = await getPost();
    let data = res.data;
    setApidata(data);
    console.log(data);

    setisLoading(false);
  }

  async function deletePost(e, id) {
    e.stopPropagation();
    const deletedPost = await deltepost(id);

    try {
      if(deletedPost.status===200){
      const newApiData=  apidata.filter((eachData)=>eachData.id !==id)

      setApidata(newApiData)
      }
      
    } catch (error) {
        console.log(error)
    }
  }

  function handlePopup(item) {
    setSelectPost(item);
    setOpenPopup(true);
  }

  useEffect(() => {
    getPostData();
  }, []);

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3  sm:grid-cols-2 grid-cols-1  gap-3 relative">
      {apidata.map((item) => {
        const { body, title, id } = item;
        return (
          <div
          key={id}
            onClick={() => handlePopup(item)}
            className="max-w-full cursor-pointer  bg-black border-white rounded-md p-2 flex flex-col justify-between border-l-2 border-l-white "
          >
            <div>
              <h1 className="">{id}.</h1>
              <h1 className="text-xl font-semibold tracking-tight mb-2">
                {title}
              </h1>
              <p className="text-zinc-400">{body}</p>
            </div>

            <div className="flex  gap-2 items-end mt-1">
              <button className="px-3 py-0.5 font-bold text-white tracking-tight cursor-pointer bg-gray-500 hover:opacity-90">
                Edit
              </button>
              <button
                onClick={(e) => deletePost(e, id)}
                className="px-5 py-0.5 font-bold text-white tracking-tight cursor-pointer bg-red-500 hover:opacity-90"
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
      {openPopup ? (
        <ProductDetails
          setOpenPopup={setOpenPopup}
          body={selectPost.body}
          title={selectPost.title}
        ></ProductDetails>
      ) : null}
    </div>
  );
}

export default AllPosts;
