import Posts from "../model/Posts.js";

const getPosts = async (req, res) => {
  try {
    const postMessage = await Posts.find({});
    res.status(200).json({ success: true, posts: postMessage });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
const createPost = async (req, res) => {
  const post = req.body;
  if (!body)
    return res
      .status(400)
      .json({ success: false, message: "title is required" });

  try {
    let newPost = new Posts(post);
    await newPost.save();
    res.status(200).json({ success: true, posts: newPost });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
export { getPosts, createPost };
