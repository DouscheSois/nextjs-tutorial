import AllBlogs from "../../src/components/events/blogs-page";

const BlogsPage = ({ data }) => {
  return <AllBlogs data={data} />;
};

export default BlogsPage;

export async function getStaticProps() {
  const { blogs_categories } = await import("/data/data.json");
  return {
    props: {
      data: blogs_categories,
    },
  };
}
