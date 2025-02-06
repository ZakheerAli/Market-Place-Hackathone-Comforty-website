import { defineType } from "sanity"; // Importing the defineType function from Sanity to create a custom schema.

export const products = defineType({
  name: "products", // Unique name for the schema, used internally in Sanity.
  title: "Products", // Human-readable title shown in Sanity Studio.
  type: "document", // This defines it as a document type, meaning it will store data for each product.
  fields: [ // Array of fields that define the structure of each product document.
    {
      name: "title", // Field name used in code.
      title: "Product Title", // Label shown in Sanity Studio.
      type: "string", // Data type for this field (text).
    },
    {
      name: "price", // Field for the product's price.
      title: "Price", // Label shown in Sanity Studio.
      type: "number", // Stores numeric values.
    },
    {
      title: "Price without Discount", // Original price before discount.
      name: "priceWithoutDiscount",
      type: "number",
    },
    {
      name: "badge", // Field to display a badge like "New" or "Sale".
      title: "Badge", // Label shown in Sanity Studio.
      type: "string",
    },
    {
      name: "image", // Field for uploading product images.
      title: "Product Image",
      type: "image",
    },
    {
      name: "category", // Reference field to link this product with a category.
      title: "Category",
      type: "reference",
      to: [{ type: "categories" }], // Points to the "categories" schema.
    },
    {
      name: "description", // Field for product descriptions.
      title: "Product Description",
      type: "text", // Supports longer text input.
    },
    {
      name: "inventory", // Field to track stock availability.
      title: "Inventory Management",
      type: "number",
    },
    {
      name: "tags", // Field to assign tags for categorization.
      title: "Tags",
      type: "array", // Stores a list of values.
      of: [{ type: "string" }], // Each item in the array is a string.
      options: {
        list: [ // Predefined tag options for easier selection.
          { title: "Featured", value: "featured" },
          { title: "Follow products and discounts on Instagram", value: "instagram" },
          { title: "Gallery", value: "gallery" },
        ],
      },
    },
  ],
});
