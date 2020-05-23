import axios from 'axios';
import * as appConstants from '../../AppConstants';

class charactersAPI {
    //fetch characters from api
    static fetchCharactersList(url = '', filterType, filterValue) {
        debugger;
        let apiUrl = url === '' ? appConstants.API_URL + '/character/' : url;
        if (filterType) {
            apiUrl = `${apiUrl}?${filterType}=${filterValue}`;
        }
        return axios.get(apiUrl)
            .then(response => {
                return response.data;
            }).catch(error => {
                throw (error);
            });
    };

    //fetch character details by id parameter
    static fetchCharacterDetailsById(id) {
        debugger;
        let data = {}, apiUrl = `${appConstants.API_URL}/character/${id}`;
        return axios.get(apiUrl)
            .then(response => {
                data.characterPrimaryInfo = response.data;
                data.characterEpisodesDetails = [];
                let episodesUrl = response.data.episode;
                let index = 0;
                function request() {
                    return axios.get(episodesUrl[index]).then(result => {
                        index++;
                        data.characterEpisodesDetails.push(result.data);
                        if (index >= episodesUrl.length) {
                            return data;
                        }
                        return request();
                    });
            
                }
                return request();
            }).catch(error => {
                throw (error);
            });
    }
}

export default charactersAPI;