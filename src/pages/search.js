import InfoCard from "@components/Card/InfoCard";
import { format } from "date-fns";
import { useRouter } from "next/router";
import React from "react";

const Search = ({ searchResults }) => {
  const router = useRouter();

  const { location, startDate, endDate, numberOfGuests } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays {range} - {numberOfGuests} guests
          </p>

          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancelation flexibility</p>
            <p className="button">Type of place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>

          <div className="flex flex-col gap-y-4">
            {searchResults.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  price={price}
                  star={star}
                  total={total}
                />
              )
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Search;

export async function getServerSideProps() {
  const res = await fetch("https://www.jsonkeeper.com/b/5NPS");
  const searchResults = await res.json();

  return {
    props: {
      searchResults,
    },
  };
}
