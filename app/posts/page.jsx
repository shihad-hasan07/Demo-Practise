"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";


export default function PostList() {
    const { data: posts, isLoading, isError, error } = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            return res.data
        }
    });

    if (isLoading) return <div className="flex justify-center items-center min-h-96"> <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div> </div>
    if (isError) return <div className="text-center p-10 text-red-500 font-semibold"> Error: {error.message}</div>

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-extrabold mb-10 text-center text-gray-800"> Latest Posts  </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {posts?.map((post) => (
                    <div key={post.id}
                        className="group p-6 bg-white rounded-2xl shadow-sm border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <span className="bg-blue-100 text-blue-600 text-xs font-bold px-3 py-1 rounded-full">
                                ID: {post.id}
                            </span>
                        </div>

                        <h2 className="text-xl font-bold text-gray-800 capitalize mb-3 line-clamp-1 group-hover:text-blue-600 transition-colors">
                            {post.title}
                        </h2>

                        <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                            {post.body}
                        </p>

                        <div className="mt-6 pt-4 border-t border-gray-50">
                            <Link href={`/posts/${post?.id}`}>
                                <button className="cursor-pointer text-sm font-semibold text-blue-500 group-hover:translate-x-1 transition-transform inline-flex items-center">
                                    Read Details →
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}