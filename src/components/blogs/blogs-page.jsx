import React from "react";
import Image from "next/image";
import Link from "next/link";

const AllBlogs = ({ data }) => {
  return (
    <>
      <div className="blogs_page">
        {data?.map((blog) => (
          <Link key={blog.id} href={`/blogs/${blog.id}`} passHref>
            <a className="card">
              <Image
                src={blog.image}
                alt={blog.title}
                width={700}
                height={700}
              />
              <h2>{blog.title} </h2>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default AllBlogs;
