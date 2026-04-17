import Image from "next/image";
import Link from "next/link";

const FriendsCards = ({ friends }) => {
    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-5'>
            {
                friends.map(friend =>
                    <div key={friend.id}>
                        <Link href={`/friends/${friend.id}`}>
                            <div className="border border-gray-100 bg-white shadow text-center rounded-md p-5">
                                <Image
                                    src={friend.picture}
                                    alt={friend.name}
                                    width={100}
                                    height={100}
                                    className="rounded-full mx-auto mb-4"
                                >
                                </Image>
                                <h2 className='text-2xl font-bold'>{friend.name}</h2>
                                <p className='text-gray-500 font-bold'>{friend.days_since_contact} days ago</p>
                                <div className="flex gap-4 text-center justify-center py-2">
                                    {
                                        friend.tags.map((tag, index) =>
                                            <p key={index} className="text-sm bg-[#cbfadb] text-[#244d3f] rounded-full px-3 py-1 font-bold">
                                                {tag}
                                            </p>)
                                    }
                                </div>
                                <div>
                                    <p className={`inline-block px-3 py-1 rounded-full text-xs font-semibold capitalize ${friend.status === 'almost due'
                                        ? 'text-black bg-amber-500'
                                        : friend.status === 'overdue'
                                            ? 'text-white bg-red-600'
                                            : 'text-white bg-green-900'
                                        }`}>
                                        {friend.status}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            }

        </div>
    );
};

export default FriendsCards;