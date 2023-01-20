import Image from "next/image";

const SingleBlog = ({ data }) => {
  return (
    <div className="blog_single_page">
      <h1> {data.title} </h1>
      <h3>Blog released on {data.date}</h3>
      <Image src={data.image} width={700} height={500} alt={data.title} />
      <h2>{data.longer_title}</h2>
      <p className="bigger_font"> {data.description_1} </p>
      <p className="bigger_font"> {data.description_2} </p>
      <p className="bigger_font"> {data.description_3} </p>
      <p className="bigger_font"> {data.description_4} </p>
      <p className="bigger_font"> {data.description_5} </p>
      <h5>Writer's Word:</h5>
      <p className="bigger_font">{data.writer_word}</p>
      <a href={data.affiliate_link} className="affiliate_link">
        Buy on Amazon
      </a>
    </div>
  );
};

export default SingleBlog;
