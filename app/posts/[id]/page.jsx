"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "next/navigation"; // to recive the id


export default function SinglePost() {
    const { id } = useParams();

    const { data: post, isLoading, isError } = useQuery({
        queryKey: ["post", id],
        enabled: !!id, // আইডি থাকলে তবেই কুয়েরি চলবে (double !! holo ekdom pure (true ba false) paoyar jonno)
        queryFn: async () => {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
            return res?.data
        }
    });

    if (isLoading) return <div className="text-center p-20">Post loading...</div>;
    if (isError) return <div className="text-center p-20 text-red-500">Failed to load the post!</div>;

    return (
        <div className="container mx-auto p-10 max-w-2xl">
            <div className="bg-white shadow-lg rounded-2xl p-8 border">
                <h1 className="text-3xl font-bold capitalize mb-4 text-gray-800">
                    {post?.title}
                </h1>
                <p className="text-gray-600 leading-relaxed text-lg">
                    {post?.body}
                </p>
                <button
                    onClick={() => window.history.back()}
                    className="mt-8 cursor-pointer text-blue-500 font-semibold hover:underline"
                >
                    ← Back to post
                </button>
            </div>
        </div>
    );
}