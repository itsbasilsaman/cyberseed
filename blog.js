// Function to populate blog feature
async function populateBlogFeature() {
  const blogFeatureGrid = document.getElementById("blog-feature-grid");
  blogFeatureGrid.innerHTML = ""; // Clear existing content if any

  try {
    const response = await fetch('http://localhost:5000/blogs');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    const blogPosts = data.blogPosts;

    blogPosts.forEach((post) => {
      const blogHTML = `
        <a
          id="w-node-f0d5a23b-375a-b86a-074c-44bb39e041e9-684c5d5e"
          href="${post.link}"
          class="blog-feature-image-wrap w-inline-block">
          <img alt="Blog Featured Image" loading="eager"
            style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
            src=${post.imageUrl}
            class="blog-feature-image" />
        </a>
        <div id="w-node-f0d5a23b-375a-b86a-074c-44bb39e041eb-684c5d5e" class="blog-feature-text-wrap">
          <div class="blog-feature-date-wrap">
            <p class="blog-feature-date">${post.date}</p>
            <a href="${post.categoryLink}" class="blog-feature-category">${post.category}</a>
          </div>
          <a href="${post.link}" class="blog-feature-title">${post.title}</a>
          <p>${post.description}</p>
          <div class="blog-feature-button-wrap">
            <a href="${post.link}" class="blog-feature-button w-button">Read More</a>
          </div>
        </div>
      `;
      blogFeatureGrid.insertAdjacentHTML("beforeend", blogHTML);
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
  }
}

// Initialize the content when DOM is loaded
document.addEventListener("DOMContentLoaded", populateBlogFeature);
