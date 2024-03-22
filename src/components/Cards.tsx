import CountryCard from "@/components/CountryCard";
import { getCountry, getRegion } from '@/lib/data'
interface ICountryCard {
    svg: string;
    alt: string;
    name: string;
    population: number;
    region: string;
    capital: string[];
}

const Cards = async ({ region, country }: { region?: string | string[] | undefined, country?: string | string[] | undefined }) => {

    const landing = ["germany", "usa", "brazil", "iceland", "philippines", "Åland", "albania", "algeria"]

    const fetchCountriesData = async () => {
        try {
            const countriesData = await Promise.all(
                landing.map(async (name: string) => {
                    const country = await getCountry(name);
                    const [card] = country;
                    return {
                        svg: card.flags.png,
                        alt: card.flags.alt,
                        name: card.name.common,
                        population: card.population.toLocaleString(),
                        region: card.region,
                        capital: card.capital.join(", "),
                    };
                })
            );
            return countriesData
        } catch (error) {
            console.error('Error fetching countries data:', error);
        }
    };

    let test: string | string[] | undefined = "oceania"
    if (region) {
        test = region
    }

    let cunts: string | string[] | undefined = "Philippines"
    if (country) {
        cunts = country
    }
    const countries = await fetchCountriesData()
    const regional = await getRegion(test)

    // console.log(regional);
    const count = await getCountry(cunts)


    return (
        <div className="maxWidth grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[75px]">
            {!region && !country &&

                countries?.map((country, index) => (
                    <CountryCard
                        key={index}
                        svg={country.svg}
                        alt={country.alt}
                        name={country.name}
                        population={country.population}
                        region={country.region}
                        capital={country.capital}
                    />
                ))
            }
            {
                regional.status === 404 && count.status === 404 &&
                <p>not found</p>
            }
            {
                regional.status !== 404 && region &&
                regional.map((country: any, index: number) => (
                    <CountryCard
                        key={index}
                        svg={country.flags.svg}
                        alt={country.flags.alt}
                        name={country.name.common}
                        population={country.population.toLocaleString()}
                        region={country.region}
                        capital={country.capital}
                    />
                ))
            }
            {
                count.status !== 404 && country &&
                count.map((country: any, index: number) => (
                    <CountryCard
                        key={index}
                        svg={country.flags.svg}
                        alt={country.flags.alt}
                        name={country.name.common}
                        population={country.population.toLocaleString()}
                        region={country.region}
                        capital={country.capital}
                    />
                ))
            }
        </div>
    );
};

export default Cards