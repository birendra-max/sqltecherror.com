import React from 'react'
import BlogContent from './BlogContent';
import RelatedPosts from './RelatedPosts';
import Auther from './Auther';
import SearchBlogss from './SearchBlogss';
import Categories from './Categories';
import Comments from './Comments';

export default function Home() {
    return (
        <>
            <div className="flex flex-col mt-2 md:px-20 mb-4">
                <div className="bg-white mt-0">
                    <div className="container mx-auto px-0 flex flex-col md:flex-row">
                        <div id="posts" className="w-full md:w-4/4 grid hover:shadow-2xl transition-all duration-300 transform">
                           <BlogContent/>
                        </div>

                        <div id="posts2" className="w-full md:w-96 md:py-0 py-4 px-2 bg-indigo-100">
                           <Auther/>
                           <SearchBlogss/>
                           <Categories/>
                           <Comments/>
                        </div>
                    </div>
                </div>
            </div>
            <RelatedPosts/>
        </>
    )
}
