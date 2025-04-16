
import axios from "axios"
const api =axios.create({
    baseURL:"https://jsonplaceholder.typicode.com"
})

export const getPost=()=>{
    return api.get("/posts")
}

export function deltepost(id){
    return api.delete(`/posts/${id}`)
}

export function uploadData(post){
    return api.post("/posts",post)
}

