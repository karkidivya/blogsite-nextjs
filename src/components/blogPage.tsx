
import React, { useEffect, useState } from 'react'
import blogInitialData from "../app/blogdata.json"
import Image from 'next/image';

interface BlogData {
  id:string,
  title: string;
  author: string;
  image: string;
  content: string;
}
interface BlogPageProps {
    id: string; // Define id prop as a string
  }
  
const BlogPage: React.FC<BlogPageProps> = ({ id }) => {
  const [blogData, setBlogData] = React.useState<BlogData | null>(null);

  useEffect(() => {
    const data = blogInitialData.find((blog: BlogData) => blog.id === id);
    setBlogData(data || null);
  }, [id]);
  
  console.log(blogData, "ididididid")
    return (
      <>
       
        {blogData && (
        <div>
          <h1>{blogData.title}</h1>
          <h4>{blogData.author}</h4>
          <Image src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPxhSCn_f1Fh4-MSEB6ve9ML1yspVf9eYWlSzVnNgpjw&s"}
         width={400} height={400}
         alt="alternate image"/>
          <h5>{blogData.content}</h5>
        </div>
      )}
      </>
    );
  };
// function BlogPage() {
//     const [data, setData] = useState<BlogData | null>(null);
//     // const { id } = useParams<{ id: string }>();

   
//     return (
//         <>
//             {data && (
//                 <div>
//                     <h1>{data.title}</h1>
//                     <h4>{data.author}</h4>
//                     <img src={data.image} alt="Girl in a jacket" width="350" height="300"/>
//                     <h5>{data.content}</h5>
//                 </div>
//             )}
//         </>
//     );
// }

export default BlogPage;
