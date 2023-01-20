import React from "react";
import Image from "next/image";
import Link from "next/link";

const CategoryBlog = ({ data, pageName }) => {
  return (
    <div className="category_blogs">
      <h1> Blogs in {pageName} </h1>

      <div className="content">
        {data.map((blog) => (
          <Link key={blog.id} href={`/blogs/${blog.type}/${blog.id}`} passHref>
            <a className="card">
              <Image
                width={300}
                height={300}
                alt={blog.title}
                src={blog.image}
              />
              <h2> {blog.title} </h2>
              <small>{blog.date}</small>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryBlog;
