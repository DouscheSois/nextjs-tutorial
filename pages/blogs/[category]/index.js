import CategoryBlog from "../../../src/components/blogs/categoryBlog";

const BlogsCategoryPage = ({ data, pageName }) => (
  <CategoryBlog data={data} pageName={pageName} />
);

export default BlogsCategoryPage;

export async function getStaticPaths() {
  const { blogs_categories } = await import("/data/data.json");
  const allPaths = blogs_categories.map((blog) => {
    return {
      params: {
        category: blog.id.toString(),
      },
    };
  });
  console.log(allPaths);
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log(context);
  const id = context?.params.category;
  const { allBlogs } = await import("/data/data.json");

  const data = allBlogs.filter((blog) => blog.type === id);

  return { props: { data, pageName: id } };
}
