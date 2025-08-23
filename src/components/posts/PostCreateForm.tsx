'use client'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "../ui/textarea"
import { useActionState } from "react"
import { createPost } from "@/actions/create-post"

type CreateFormPostProps = {
  slug: string,
}


const PostCreateForm : React.FC<CreateFormPostProps> = ({slug}) => {

  const [formState, action] = useActionState(createPost.bind(null, slug),{errors: {}})

  return (
    <Dialog>
      
        <DialogTrigger asChild>
          <Button>New Post</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <form action={action}>
          <DialogHeader>
            <DialogTitle>Create a Post</DialogTitle>
            <DialogDescription className="mt-2">
               Write a new Post. when you are done
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div >
              <Label htmlFor="title" className="mt-2">Title</Label>
              <Input id="title" name="title" className="mt-2" />
            </div>
            {formState.errors.title && <p className="text-sm text-red-600  ">{formState.errors.title}</p>}
            <div >
              <Label htmlFor="content" className="mt-2">Content</Label>
              <Textarea id="content" name="content" className="mt-2"/>
            </div>
              {formState.errors.content && <p className="text-sm text-red-600  ">{formState.errors.content}</p>}
              {formState.errors.formError && <div className="border border-red-600 bg-red-200 p-2 rounded" >{formState.errors.formError}</div>}


          </div>
          <DialogFooter>
            
            <Button type="submit" className="w-full mt-2">Save changes</Button>
          </DialogFooter>
        </form>  
        </DialogContent>
    </Dialog>
  )
}

export default PostCreateForm;