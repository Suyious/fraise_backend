import mongoose from "mongoose";

const fraiseSchema = mongoose.Schema({
  background: String,
  credit: String,
  creditlink: String,
  photolink: String,
});

export default mongoose.model("fraisebackground", fraiseSchema);


/* 
{
    "background": "https://images.unsplash.com/photo-1597073591683-0c4b9355d9c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "credit" : "Hitanshu Patel",
    "creditlink": "https://unsplash.com/@__hitanshu?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText",
    "photolink": "https://unsplash.com/t/nature?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
}

*/