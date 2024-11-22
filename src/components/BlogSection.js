import React from 'react';
import './BlogSection.css';

const BlogSection = () => {
  return (
    <div className="blog-section">
      <h3>The Overflow Blog</h3>
      <p>
        The one thing I wish I had known about software engineers' productivity.
      </p>
      <p>
        Don’t build your app in the cloud; build it with the cloud.
      </p>

      <div className="meta">
        <h4>Featured & meta</h4>
        <p>How to use a developer’s free time wisely</p>
      </div>
      <div className="hot-meta">
        <h4>Hot meta post</h4>
        <p>How to hire great engineers</p>
      </div>
    </div>
  );
};

export default BlogSection;
