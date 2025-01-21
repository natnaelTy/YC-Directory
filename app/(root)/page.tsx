
import SearchForm from "../components/SearchForm";
import StartupCard from "../components/StartupCard";


export default async function Home({searchParams}: {
    searchParams: Promise<{query?: string}>
}) {
  const query = (await searchParams).query;

  type StartupCardType = {
    _createdAt: string,
    views: number,
    author: string | number,
    _id: number,
    description: string,
    image: string,
    category: string,
    title: string,
  }
  const posts = [
    {
    _createdAt: new Date(),
    views: 44,
    author: {_id: 1, name: "Natnael"},
    _id: 1,
    description: "This is a Description",
    image: "logo.png",
    category: "Robots",
    title: "We Robots",
  },
];

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
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
              )
          }
        </ul>
      </section>
      </>
  );
}
