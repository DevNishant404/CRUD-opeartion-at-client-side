import { useEffect, useState } from "react";
import { uploadData } from "../api/PostApi";

function Form({ setApidata, apidata,modifyData,setModifyData }) {
  const [post, setPost] = useState({
    title: "",
    body: "",
  });

  function handleOnchange(e) {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  }

  async function handleOnSubmit(e, onePost) {
    e.preventDefault();

    const action=e.nativeEvent.submitter.value;    

    let resposne = await uploadData(onePost);

    try {
      if (resposne.status == 201) {
        setApidata([...apidata, resposne.data]);

        setPost({ title: "", body: "" });
      }
    } catch (error) {
      console.log("something went wrong");
    }
  }

  const isEmpty=Object.keys(modifyData).length===0


  useEffect(()=>{
    modifyData && 
    setPost({
        title:modifyData.title || "",
        body:modifyData.body || ""
    })
  },[modifyData])


  return (
    <form
      onSubmit={(e) => handleOnSubmit(e, post)}
      action=""
      className="flex sm:flex-row flex-col sm:w-fit mx-auto gap-4 sm:items-end mb-5"
    >
      <div className="flex flex-col">
        <label htmlFor="">Title</label>
        <input
          value={post.title}
          onChange={(e) => handleOnchange(e)}
          className="outline-none border-1 border-white  px-2 py-0.5"
          type="text"
          name="title"
          id="title"
          placeholder="Enter Title"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="">Create Post</label>
        <input
          value={post.body}
          onChange={(e) => handleOnchange(e)}
          className="outline-none border-1 border-white  px-2 py-0.5"
          type="text"
          name="body"
          id="post"
          placeholder="Whats in your mind..."
        />
      </div>

      <button
        className="bg-green-600 px-2 py-0.5 border-1 border-green-600 cursor-pointer"
        type="submit"
        value={isEmpty? "Create Post":"Edit Post"}
      >
        {
            isEmpty? "Create Post":"Edit Post"
        }
      </button>
    </form>
  );
}

export default Form;
