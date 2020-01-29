const concertUrl = `https://app.ticketmaster.com/discovery/v2/events?apikey=${concertKey}&unit=miles&locale=*&size=10&city=Nashville&countryCode=US&stateCode=TN&segmentName=Music&preferredCountry=us`;

const APIManager = {
    searchConcert(searchCriteria, category, key, page) {
        const url = concertUrl + `${key}${searchCriteria}&page=${page}`;
        return fetch(url)
            .then(response => response.json())
            .catch((error) => {
                alert("searchConcert " + error);
                document.getElementById('search-results').innerHTML = `Sorry, our concert ${category} search is currently down. Try our other searches.`;
            });
    }
};