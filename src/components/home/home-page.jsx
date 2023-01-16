import Link from "next/link";
import Image from "next/image";

export const HomePage = ({ data }) => (
  <div className="home_body">
    {data?.map((blog) => (
      <Link key={blog.id} href={`/blogs/${blog.id}`} passHref>
        <a className="card" href={`/blogs/${blog.id}`}>
          <div className="image">
            <Image width={600} height={400} alt={blog.title} src={blog.image} />
          </div>
          <div className="content">
            <h2> {blog.title} </h2>
            <p> {blog.description} </p>
          </div>
        </a>
      </Link>
    ))}
  </div>
);
