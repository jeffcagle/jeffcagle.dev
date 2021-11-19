const path = require(`path`);
// const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const serviceTemplate = path.resolve("./src/templates/service.js");
  const projectTemplate = path.resolve("./src/templates/project.js");
  const blogPostTemplate = path.resolve("./src/templates/blogPost.js");

  const servicesResult = await graphql(
    `
      {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { in: "services" } } }
          sort: { fields: [frontmatter___order], order: ASC }
          limit: 1000
        ) {
          nodes {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    `
  );

  const projectsResult = await graphql(
    `
      {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { in: "projects" } } }
          sort: { fields: [frontmatter___order], order: ASC }
          limit: 1000
        ) {
          nodes {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    `
  );

  const blogPostsResult = await graphql(
    `
      {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { in: "blog" } } }
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          nodes {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    `
  );

  const services = servicesResult.data.allMarkdownRemark.nodes;
  const projects = projectsResult.data.allMarkdownRemark.nodes;
  const blogPosts = blogPostsResult.data.allMarkdownRemark.nodes;

  services.forEach((service, index) => {
    const previousPostId = index === 0 ? null : services[index - 1].id;
    const nextPostId =
      index === services.length - 1 ? null : services[index + 1].id;

    createPage({
      path: `/services/${service.frontmatter.slug}`,
      component: serviceTemplate,
      context: {
        id: service.id,
        previousPostId,
        nextPostId,
      },
    });
  });

  projects.forEach((project, index) => {
    const previousPostId = index === 0 ? null : projects[index - 1].id;
    const nextPostId =
      index === projects.length - 1 ? null : projects[index + 1].id;

    createPage({
      path: `/projects/${project.frontmatter.slug}`,
      component: projectTemplate,
      context: {
        id: project.id,
        previousPostId,
        nextPostId,
      },
    });
  });

  blogPosts.forEach((post, index) => {
    const previousPostId = index === 0 ? null : blogPosts[index - 1].id;
    const nextPostId =
      index === blogPosts.length - 1 ? null : blogPosts[index + 1].id;

    createPage({
      path: `/blog/${post.frontmatter.slug}`,
      component: blogPostTemplate,
      context: {
        id: post.id,
        previousPostId,
        nextPostId,
      },
    });
  });
};
