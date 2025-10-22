import prisma from "@/lib/prisma";

export default async function Posts() {
  const posts = await prisma.post.findMany();
  //console.log("posts", posts);

  const addARecordToDB = async () => {
    await prisma.post.create({
      data: {
        authorId: 1,
        published: true,
        title: "Test",
        content: "Content of the Post",
      },
    });
  };

  //addARecordToDB();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center -mt-16">
      <h1 className="text-4xl font-bold mb-8 font-[family-name:var(--font-geist-sans)] text-[#333333]">
        Posts
      </h1>
      <ul className="font-[family-name:var(--font-geist-sans)] max-w-2xl space-y-4">
        {posts.map((post) => (
          <li key={post.id}>
            <span className="font-semibold">{post.title}</span>
            <span className="text-sm text-gray-600 ml-2">
              by {post.content}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
