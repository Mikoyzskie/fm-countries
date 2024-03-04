export async function getCountry(country: string | string[] | undefined) {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${country}`,
      {
        method: "GET",
      }
    );

    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getRegion(region: string | string[] | undefined) {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/region/${region}`,
      {
        method: "GET",
      }
    );

    return response.json();
  } catch (error) {
    console.log(error);
  }
}
export async function getFromCode(code: string) {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha/${code}`,
      {
        method: "GET",
      }
    );

    return response.json();
  } catch (error) {
    console.log(error);
  }
}
