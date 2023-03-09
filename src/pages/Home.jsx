import { useState, useEffect } from 'react'
import { Loader, Card, FormField } from '../Components'

const RenderCards = ({ data, title }) => {
    if (data.length > 0) {
        return data.map((post) => {
            return <Card key={post._id} {...post} />
        })
    }

    return (
        <h1 className="text-xl mt-4 font-bold text-[#6666EA] uppercase">
            {title}
        </h1>
    )
}

const Home = () => {
    const [loading, setLoading] = useState(false)
    const [allPosts, setAllPosts] = useState(null)
    const [searchText, setSearchText] = useState('Gerren')

    return (
        <section className="max-w-7xl mx-auto">
            <div>
                <h1 className="font-inter font-extrabold text-[#1B1918] text-[32px]">
                    The Community Showcase
                </h1>
                <p className="mt-2 text=[16px] text-[#766E6B] ">
                    Browse through a collection of creative images generated
                    using Artificial Intellegence.
                </p>
            </div>
            <div className="mt-16">
                <FormField />
            </div>
            <div className="mt-10">
                {loading ? (
                    <div className="flex justify-center items-center">
                        <Loader />
                    </div>
                ) : (
                    <div>
                        {searchText && (
                            <p className="font-medium text-[14px] text-[#766E6B]">
                                Showing results for{' '}
                                <span className=" text-[#1B1918]">
                                    {searchText}
                                </span>
                            </p>
                        )}
                        <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-4 xs:grid-cols-2">
                            {searchText ? (
                                <RenderCards
                                    data={[]}
                                    title="No search results found."
                                />
                            ) : (
                                <RenderCards
                                    data={[]}
                                    title="No posts found."
                                />
                            )}
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Home
