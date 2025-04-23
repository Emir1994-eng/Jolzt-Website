import { fetchBlogBySlug } from "../../../../utils/blogService"

interface Props {
    params: { slug: string }
}

export default async function BlogPage({ params }: Props) {
    const blog = await fetchBlogBySlug(params.slug);

    console.log(blog)

    if (!blog) {
        return <div>Post not found.</div>;
    }

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">{blog?.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: blog?.content }} />
        </div>
    );
}
