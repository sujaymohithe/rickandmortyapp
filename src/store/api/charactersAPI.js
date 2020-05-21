import axios from 'axios';
import * as appConstants from '../../AppConstants';

class charactersAPI {
    //fetch characters from api
    static fetchCharactersList(url = '', filter) {
        let apiUrl = url === '' ? appConstants.API_URL + '/character/' : url;
        if (filter) {
            apiUrl = apiUrl + '?name=' + filter;
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
        let apiUrl = `${appConstants.API_URL}/character/${id}`;
        return axios.get(apiUrl)
            .then(response => {
                return response.data;
            }).catch(error => {
                throw (error);
            });
    }
}

export default charactersAPI;