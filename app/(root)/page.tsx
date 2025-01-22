
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import SearchForm from "../components/SearchForm";
import StartupCard from "../components/StartupCard";
import { sanityFetch } from "@/sanity/lib/live";
import { SanityLive } from "@/sanity/lib/live";
export type StartupCardType = {
  _createdAt: string,
 views: number,
  author:{
    name: string,
    _id: number,
    bio: string,
    image: string,
  },
  _id: number,
  description: string,
  image: string,
  category: string,
  title: string,
}

export default async function Home({searchParams}: {
    searchParams: Promise<{query?: string}>
}) {
  const query = (await searchParams).query;

  const params = {search: query || null};

  const {data: posts} = await sanityFetch({query:STARTUPS_QUERY, params});



  return (
      <>
      <section className="pink_container">
          <h1 className="heading">Pitch Your Startup, <br /> Connect With Entrepreneurs</h1>

          <p className="sub-heading !max-w-3xl">Submit Ideas, Vote on Pitchs, and Get Noticed in Virtual Competitons.</p>

          <SearchForm query={query}/>
      </section>
     
      <section className="section_container">
          <p className="text-30-semibold">
            {query ? `Search results for ${query}` : 'All Startups' }
          </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
              )
          }
        </ul>
      </section>
      <SanityLive/>
      </>
  );
}
