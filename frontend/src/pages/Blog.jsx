
import React from 'react';
// import Navbar from '../layout/Navbar';
import BlogCard from '../components/BlogCard';
import LocationSection1 from '../components/LoctionSection1';

function Blog() {
    return (
        <div>
            {/* <Navbar style={{ backgroundColor: 'white', color: 'black' }} /> */}
       
            <BlogCard />
            <LocationSection1 />
           
        </div>
    );
}

export default Blog;