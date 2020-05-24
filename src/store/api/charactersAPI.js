import axios from 'axios';
import * as appConstants from '../../AppConstants';

class charactersAPI {
    //fetch characters from api
    static fetchCharactersList(url = '', filterType, filterValue) {
        let apiUrl = url === '' ? appConstants.API_URL + '/character/' : url;
        if (filterType) {
            apiUrl = `${apiUrl}?${filterType}=${filterValue}`;
        }
        return axios.get(apiUrl)
            .then(response => {
                return response.data;
            }).catch(error => {
                if(error.response.status === 404)
                    return null;
                throw (error);
            });
    };

    //fetch character details by character id parameter
    static fetchCharacterDetailsById(id) {
        let data = {}, apiUrl = `${appConstants.API_URL}/character/${id}`;
        return axios.get(apiUrl)
            .then(response => {
                data.characterPrimaryInfo = response.data;
                data.characterEpisodesDetails = [];
                let episodesUrl = response.data.episode;
                let index = 0;
                //fetch all episodes
                const getEpisodesRequest = () => {
                    return axios.get(episodesUrl[index]).then(result => {
                        index++;
                        data.characterEpisodesDetails.push(result.data);
                        if (index >= episodesUrl.length) {
                            return data;
                        }
                        return getEpisodesRequest();
                    });            
                }
                return getEpisodesRequest();
            }).catch(error => {
                throw (error);
            });
    }
}

export default charactersAPI;