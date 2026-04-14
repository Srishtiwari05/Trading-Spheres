export default {
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    { name: "mainImage", title: "Main image", type: "image" },
    { name: "publishedAt", title: "Published at", type: "datetime" },
    { name: "excerpt", title: "Excerpt", type: "text" },
    { name: "body", title: "Body", type: "array", of: [{ type: "block" }] },
    { name: "categories", title: "Categories", type: "array", of: [{ type: "reference", to: { type: "category" } }] },
  ],
};