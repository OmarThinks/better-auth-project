"use client";
import prisma from "@/lib/prisma";

const AddPostButton = () => {
  return (
    <button
      onClick={() => {
        prisma.post.create({
          data: {
            authorId: 1,
            published: true,
            title: "Test",
            content: "Content of the Post",
          },
        });
      }}
    >
      Add Post
    </button>
  );
};

export { AddPostButton };
