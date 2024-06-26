"use client";
import CardWithForm from "@/components/Card";
import Image from "next/image";
import { useAuth } from "./context/AuthContext";
import initialblogData from "./blogdata.json";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useEffect, useState } from "react";
import welcome from "../../public/welcome.jpg";

interface Blog {
  id: string;
  title: string;
  content: string;
  author: string;
  category: string;
  tags: string[];
  creationdate: string;
  comment: { userName: string; comment: string }[];
  image: string;
}

export default function Home() {
  const [category, setCategory] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [filteredBlogData, setFilteredBlogData] = useState([]);
  const [blogData, setBlogData] = React.useState<Blog[]>([]);
  const [displayedBlogData, setDisplayedBlogData] = useState<Blog[]>([]);
  const tags = [
    "scientific",
    "bestofbest",
    "educational",
    "innovation",
    "enterpreneurship",
    "regular",
    "english",
    "nepali",
    "hindi",
  ];

  const { login, isAuthenticated } = useAuth();
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    // setBlogData(initialblogData)
    setDisplayedBlogData(initialblogData);
  }, []);

  useEffect(() => {
    // setBlogData(initialblogData)
    filterBlogData();
  }, [category]);

  const filterBlogData = () => {
    let filteredData = initialblogData;
    if (category) {
      filteredData = filteredData.filter(
        (blog: any) => blog.category == category
      );
    }
    // if (selectedTags.length > 0) {
    //   filteredData = filteredData.filter(blog => blog.tags.some(tag => selectedTags.includes(tag)));
    // }
    console.log(filteredData, "csbcj");
    setDisplayedBlogData(filteredData);
  };

  const handleChange = (value: string) => {
    if (value === "every") {
      setCategory("");
      setDisplayedBlogData(blogData); // Show all blog data when deselected
    } else {
      setCategory(value);
    }
  };

  // const handleTagChange = (event, newValue) => {
  //   setSelectedTags(newValue);
  //   filterBlogData(blogData);
  // };

  return (
    <>
      {isAuthenticated() && (
        <div className="flex justify-left items-center bg-slate-200">
          <div className=" ml-20 my-3">
            <Select onValueChange={handleChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="every">All Categories</SelectItem>
                  <SelectItem value="educational">educational</SelectItem>
                  <SelectItem value="startup">startup</SelectItem>
                  <SelectItem value="Science">Science</SelectItem>
                  <SelectItem value="Food">Food</SelectItem>
                  <SelectItem value="Finance">Finance</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      )}
      <div className="flex justify-center ">
        <Image src={welcome} width={600} height={300} alt="alternate image" />
      </div>
      <div className="flex justify-center py-5">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-4xl">
          Our featured blogs
        </h1>
      </div>
      <div className="flex   items-center">
        <main className="flex  items-center justify-center mx-5 mt-5 flex-wrap">
          {displayedBlogData.map((blog, i) => (
            
              <CardWithForm
                key ={i}
                id={blog.id}
                title={blog.title}
                content={blog.content}
                author={blog.author}
                image={blog.image}
              />
           
          ))}
          
        </main>
      </div>
    </>
  );
}
