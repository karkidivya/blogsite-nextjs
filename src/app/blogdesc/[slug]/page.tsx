'use client'
import { useParams } from 'next/navigation'
import BlogPage from '@/components/blogPage'

 
export default function Page() {
  const { slug } = useParams() as { slug: string }
  return (<>
   <h1>welcome to the blogSite</h1>
  <BlogPage id={slug}/>
  </>)
}