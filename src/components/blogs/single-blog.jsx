import Image from "next/image";

const SingleBlog = ({ data }) => {
  return (
    <div className="blog_single_page">
      <h1> {data.title} </h1>
      <Image src={data.image} width={1000} height={500} alt={data.title} />
      <p> {data.description} </p>
    </div>
  );
};

export default SingleBlog;
