export default {
  name: "course",
  title: "Course",
  type: "document",
  fields: [
    { name: "name", title: "Course Name", type: "string" },
    { name: "type", title: "Type", type: "string", options: { list: ["Online", "Offline"] } },
    { name: "duration", title: "Duration", type: "string" },
    { name: "price", title: "Price", type: "string" },
    { name: "description", title: "Description", type: "text" },
    { name: "image", title: "Image", type: "image" },
  ],
};