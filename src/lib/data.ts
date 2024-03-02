export async function getCountry(country: string) {
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

export async function getRegion(region?: string) {
  let reg = "oceania";

  if (region) {
    reg = region;
  }

  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/region/${reg}`,
      {
        method: "GET",
      }
    );

    return response.json();
  } catch (error) {
    console.log(error);
  }
}
