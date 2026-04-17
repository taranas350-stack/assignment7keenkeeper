import Image from "next/image";
import { FaRegBell } from "react-icons/fa";
import { FiArchive } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import CallButton from "@/components/CallButton";
import TextButton from "@/components/TextButton";
import VideoButton from "@/components/VideoButton";

const FriendsDetailsPage = async ({ params }) => {
    const { friendsId } = await params;
    const res = await fetch('https://keen-keeper-flax.vercel.app/friends.json/');
    const allFriends = await res.json();
    const friend = allFriends.find(f => f.id === parseInt(friendsId));
    console.log(friend, 'friend details');

    return (
        <div className="container mx-auto bg-slate-50 p-8 flex justify-center items-center font-sans text-slate-700">
            <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-4">

                <div className="md:col-span-4 space-y-4">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                        <Image src={friend.picture} alt={friend.name} width={80} height={80} className="w-20 h-20 rounded-full border-4 border-slate-50 mb-4 object-cover" />
                        <h2 className="text-2xl font-bold text-slate-800">{friend.name}</h2>
                        <div className="my-2 space-y-2">
                            <h2 className="bg-red-100 text-red-600 text-md px-2 py-0.5 rounded-full">{friend.status}</h2>
                            <h2 className="space-x-2">
                                {
                                    friend.tags.map((tag, index) => (
                                        <span key={index} className="bg-emerald-100 text-emerald-600 text-md px-2 py-0.5 rounded-full">
                                            {tag}
                                        </span>
                                    ))
                                }
                            </h2>
                        </div>
                        <p className="italic text-slate-400 text-sm mt-2 font-bold">"{friend.bio}"</p>
                        <p className="text-slate-400 text-xs mt-1">Preferred: {friend.email}</p>
                    </div>

                    <div className="space-y-2">
                        <button className="w-full bg-white border border-slate-100 p-3 rounded-lg shadow-sm flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors text-sm font-medium">
                            <FaRegBell />
                            Snooze 2 Weeks
                        </button>
                        <button className="w-full bg-white border border-slate-100 p-3 rounded-lg shadow-sm flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors text-sm font-medium">
                            <FiArchive />
                            Archive
                        </button>
                        <button className="w-full bg-white border border-slate-100 p-3 rounded-lg shadow-sm flex items-center justify-center gap-2 hover:bg-red-50 text-red-500 transition-colors text-sm font-medium">
                            <RiDeleteBin6Line />
                            Delete
                        </button>
                    </div>
                </div>

                <div className="md:col-span-8 space-y-4">

                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
                            <p className="text-3xl font-bold text-emerald-900">62</p>
                            <p className="text-lg text-slate-400 mt-1">Days Since Contact</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
                            <p className="text-3xl font-bold text-emerald-900">30</p>
                            <p className="text-lg text-slate-400 mt-1">Goal (Days)</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
                            <p className="text-xl font-bold text-emerald-900">Feb 27, 2026</p>
                            <p className="text-lg text-slate-400 mt-1">Next Due</p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 relative">
                        <button className="absolute top-4 right-4 text-lg bg-slate-50 border border-slate-200 px-3 py-1 rounded hover:bg-slate-100">Edit</button>
                        <h3 className="text-emerald-900 text-lg font-bold mb-2">Relationship Goal</h3>
                        <p className="text-slate-500 text-sm">Connect every <span className="font-bold text-slate-800">30 days</span></p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                        <h3 className="text-green-900 text-lg font-bold mb-4">Quick Check-In</h3>
                        <div className="grid grid-cols-3 gap-4">
                            <CallButton friend={friend} />
                            <TextButton friend={friend} />
                            <VideoButton friend={friend} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendsDetailsPage;