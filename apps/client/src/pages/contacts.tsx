import axios from 'axios';
import React from 'react';

interface ContactsProps {
  posts: {
    userId: number;
    id: number;
    title: string;
    body: string;
  }[];
}

export default function Contacts({ posts }: ContactsProps) {
  if (!posts) {
    return null;
  }

  return (
    <div>
      <h1 style={{ color: 'green' }}>You are the best my friend</h1>

      {posts?.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}

      <p style={{ color: 'blue' }}>Special thanks to Nikolay Goncharuk</p>
      <p style={{ color: 'blue' }}>Special thanks to Vladimir Gagarkin</p>
    </div>
  );
}

export const getPageProps = async () => {
  const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');

  return {
    props: {
      posts: posts.data,
    },
  };
};
