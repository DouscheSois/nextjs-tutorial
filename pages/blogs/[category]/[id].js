import SingleBlog from "../../../src/components/blogs/single-blog";

const BlogPage = ({ data }) => <SingleBlog data={data} />;

export default BlogPage;

export async function getStaticPaths() {
  const data = await import("/data/data.json");
  const allBlogs = data.allBlogs;

  const allPaths = allBlogs.map((path) => {
    return {
      params: {
        category: path.type,
        id: path.id,
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log(context);
  const id = context.params.id;
  const { allBlogs } = await import("/data/data.json");
  const blogData = allBlogs.find((blog) => id === blog.id);

  return {
    props: { data: blogData },
  };
}
