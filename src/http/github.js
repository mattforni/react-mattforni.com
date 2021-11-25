import axios from "axios";

const HEADERS = {
    'Accept': 'application/vnd.github.v3+json'
}

// Exports all methods by default
export default {
    /**
     * Creates a GET request for the public events for my Github user (mattforni)
     */
    getPublicEvents() {
        return axios.get(
            'https://api.github.com/users/mattforni/events/public',
            {
                header: HEADERS
            })
    }
}
