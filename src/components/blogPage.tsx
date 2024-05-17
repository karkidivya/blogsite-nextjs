import React, { useEffect, useState } from "react";
import blogInitialData from "../app/blogdata.json";
import Image from "next/image";
import { useAuth } from "@/app/context/AuthContext";

interface Comment {
  userName: string;
  comment: string;
}
interface BlogData {
  id: string;
  title: string;
  author: string;
  image: string;
  content: string;
  comment: Comment[];
}
interface BlogPageProps {
  id: string;
}

const BlogPage: React.FC<BlogPageProps> = ({ id }) => {
  const [blogData, setBlogData] = React.useState<BlogData | null>(null);
  
  const [newComment, setNewComment] = useState<Comment>({ userName: '', comment: '' });
  const {name, isAuthenticated} = useAuth()
  const userName = name;
  useEffect(() => {
    const data = blogInitialData.find((blog: BlogData) => blog.id === id);
    setBlogData(data || null);
  }, [id]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    
    
    const { name, value } = e.target;
    setNewComment((prevComment) => ({ ...prevComment, [name]: value, userName: userName }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (blogData && newComment.userName && newComment.comment) {
      const updatedBlogData = { ...blogData, comment: [...blogData.comment, newComment] };
      setBlogData(updatedBlogData);
      setNewComment({ userName: '' , comment: '' });
    }
  };

  console.log(blogData, "ididididid");
  return (
    <>
      {blogData && (
        <div className="flex flex-col gap-y-10	">
          <div>
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-10 ml-10 mt-10" >
            {blogData.title}
          </h2>
          <div className="flex ml-12">
            <h4>{blogData.author}</h4>
          </div></div>
          <div className="flex justify-center ">
            <Image
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPxhSCn_f1Fh4-MSEB6ve9ML1yspVf9eYWlSzVnNgpjw&s"
              }
              width={800}
              height={800}
              alt="alternate image"
            />
          </div>
          <h5 className="ml-10">{blogData.content}</h5>

          <div className="flex justify-around ">
          {isAuthenticated() ? (<div className="ml-10 my-10">
            <h3 className="text-2xl font-semibold">Comments</h3>
            <div className="mt-4">
              {blogData.comment.length > 0 ? (
                blogData.comment.map((comment, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-200 pb-4 mb-4"
                  >
                    <p className="font-semibold">{comment.userName}</p>
                    <p>{comment.comment}</p>
                  </div>
                ))
              ) : (
                <p>No comments yet. Be the first to comment!</p>
              )}
            </div>

            <form onSubmit={handleSubmit} className="mt-6">
             
              <div className="mb-4">
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
                  Comment
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  value={newComment.comment}
                  onChange={handleInputChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Add Comment
              </button>
            </form>
          </div>) : 
          (<div> 
            <div className="text-lg font-semibold ml-20">Sign In to see comments</div></div>)
          }
            </div>

        </div>
      
      )}
    </>
  );
};

export default BlogPage;
