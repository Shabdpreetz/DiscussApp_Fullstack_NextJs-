import CommentCreateForm from '@/components/comments/comment-create-form';
import CommentList from '@/components/comments/comment-list';
import PostShow from '@/components/posts/post-show';
import { Button } from '@/components/ui/button';
import { link } from 'fs';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import React, { Suspense } from 'react'


type PostShowProps = {
  params: Promise<{ slug: string; postid: string }>
}


const PostShowPage: React.FC<PostShowProps> = async ({ params }) => {

  const { slug, postid } = (await params);

  console.log(postid);


  return (
    <div className='space-y-3'>
      <Link href={`/topics/${slug}`}>
        <Button variant={'link'}>
          <ChevronLeft />
          Back to ${slug}
        </Button>
      </Link>
      <Suspense fallback={<p>Loading...</p>}>
        <PostShow postId={postid} />
      </Suspense>
      <CommentCreateForm postId={postid} startOpen />
      <CommentList postId={postid} />
    </div>
  )
}


export default PostShowPage