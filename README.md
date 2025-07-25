# My Personal Blog

This is a personal blog built with [Astro](https://astro.build/), a modern web framework for building fast, content-focused websites. The UI components are built with [React](https://react.dev/) and styled with [Tailwind CSS](https://tailwindcss.com/). The entire project is written in [TypeScript](https://www.typescriptlang.org/).

## 🚀 Project Structure

This project follows a standard Astro project structure. Here's a quick overview:

```
/
├── public/              # Static assets (images, fonts, etc.)
├── src/
│   ├── assets/          # Project assets (images, etc.) that will be processed by Astro
│   ├── components/      # Reusable UI components (.astro, .tsx)
│   ├── layouts/         # Page layouts
│   ├── pages/           # Site pages
│   ├── posts/           # Blog post content (.md)
│   └── styles/          # Global styles
├── astro.config.mjs     # Astro configuration
├── package.json         # Project dependencies and scripts
└── tsconfig.json        # TypeScript configuration
```

## Prerequisites

You need to have [Bun](https://bun.sh/) installed to run this project.

## 🧞 Getting Started

All commands are run from the root of the project in a terminal:

| Command         | Action                                      |
| :-------------- | :------------------------------------------ |
| `bun install`   | Installs dependencies                       |
| `bun run dev`   | Starts the local development server         |
| `bun run build` | Builds the site for production to `./dist/` |

The development server will be available at `http://localhost:4321`.

## ✍️ Adding Content

### Creating Blog Posts

To create a new blog post, simply add a new Markdown file (`.md`) to the `src/posts/` directory. You can use frontmatter to add metadata like title, description, and publication date to your posts.

### Adding Images

You can add images to your blog posts in two ways:

1. **In the `public/` directory:**

    - Place your image (e.g., `my-image.png`) inside the `public/` folder.
    - Reference it in your Markdown file using a root-relative path:

      ```markdown
      ![Alt text for my image](/my-image.png)
      ```

    - These images are not processed or optimized by Astro.

2. **In the `src/assets/` directory (Recommended):**
    - Place your image (e.g., `my-awesome-image.png`) inside the `src/assets/` folder.
    - Reference it in your Markdown file using a relative path:

      ```markdown
      ![Alt text for my awesome image](../assets/my-awesome-image.png)
      ```

    - Astro will process and optimize these images during the build, which is great for performance.

## Licensing

This project is licensed under the MIT License.

