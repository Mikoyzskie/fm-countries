import CountryCard from "@/components/CountryCard";
import { getCountry } from '@/lib/data'
import { getRegion } from '@/lib/data'

interface CountryCard {
    svg: string;
    alt: string;
    name: string;
    population: number;
    region: string;
    capital: string[];
}

const Cards = async ({ region }: { region?: string }) => {

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
    const countries = await fetchCountriesData()
    const regional = await getRegion(region)

    return (
        <div className="maxWidth grid grid-cols-4 gap-[75px]">
            {
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
        </div>
    );
};

export default Cards