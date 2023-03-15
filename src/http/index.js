import axios from "axios";

const AUTH_HEADERS = {
    'X-RapidAPI-Key': 'rYjwkGWVoRmshPccKc4taJF3PWSHp1KD5injsn3wwXnCJnY2fZ',
    'X-RapidAPI-Host':  'tasty.p.rapidapi.com',
}
const getRecipesList = async (tags = null, q = null) => {
    let params = { from: 0, size: 20 };

    // Send query as a parameter if it is longer than 3.
    if (q) {
        if (q.length <= 3) {
            throw new Error('Search query has less than 4 characters.')
        } else {
            params['q'] = q;
        }
    }

    // If there are tags, send them.
    if (tags) {
        params['tags'] = tags.join(',');
    }

    const options = {
        url: 'https://tasty.p.rapidapi.com/recipes/list',
        headers: AUTH_HEADERS,
        params
    }

    const resp = await axios(options);
    return resp.data;
}


const preprocessRecipes = (recipes) => recipes.map(
    (recipe) => {
        const {name, id, thumbnail_url, user_ratings, credits, total_time_minutes, tags} = recipe;
        return ({
            id,
            title: name,
            image_source: thumbnail_url,
            rating: Math.round(user_ratings?.score * 5),
            profile_image_source: credits[0]?.image_url,
            user_name: credits[0]?.name,
            time_required: total_time_minutes,
            tags: tags.map(
                (tag) => tag["display_name"]
            )
        })
    }
)

export { getRecipesList, preprocessRecipes };