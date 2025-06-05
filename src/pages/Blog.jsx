
import React from 'react';
// import Navbar from '../layout/Navbar';
import BlogSearch from '../components/BlogSearch';
import BlogCard from '../components/BlogCard';
import AllBlogPost from '../components/AllBlogPost';
import LocationSection from './LocationSection';
import LocationSection1 from '../components/LoctionSection1';

function Blog() {
    return (
        <div>
            {/* <Navbar style={{ backgroundColor: 'white', color: 'black' }} /> */}
            <BlogSearch />
            <BlogCard />
            <AllBlogPost />
            <LocationSection1 />
           
        </div>
    );
}

export default Blog;