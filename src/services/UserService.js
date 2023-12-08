/*
 *
 *
 * @author: iusmansultan
 *All apis and backend work of the app is in this file
 *
 *
 */

import axios from 'axios';
import {baseUrl} from '../helpers/Config';
import {apiEndPoints} from '../helpers/Config';

const UpdateUserProfile = async body => {
  const {password, name, about, imageUrl, id} = body;
  try {
    const url = baseUrl + apiEndPoints.USER.UPDATE_USER_PROFILE + id;
    return axios
      .post(url, body)
      .then(response => {
        const {success, message, data} = response.data;

        return {
          success,
          message,
          data: data,
        };
      })
      .catch(err => {
        return {
          success: false,
          message: err.message,
          data: [],
        };
      });
  } catch (error) {
    return {
      success: false,
      message: error.message,
      data: [],
    };
  }
};
const UploadUserImage = async body => {
  try {
    const apiUrl = baseUrl + apiEndPoints.USER.UPLOAD_USER_IMAGE;
    return axios
      .post(apiUrl, body)
      .then(response => {
        const {success, message, url} = response.data;

        return {
          success,
          message,
          url,
        };
      })
      .catch(err => {
        return {
          success: false,
          message: err.message,
          url: '',
        };
      });
  } catch (error) {
    return {
      success: false,
      message: error.message,
      url: '',
    };
  }
};
const GetTeacherStats = async id => {
  console.log(id);
  try {
    const apiUrl = baseUrl + apiEndPoints.USER.GET_TEACHER_STATS + id;
    return axios
      .get(apiUrl)
      .then(response => {
        const {success, message, statsofUser} = response.data;

        return {
          success,
          message,
          data: statsofUser,
        };
      })
      .catch(err => {
        return {
          success: false,
          message: err.message,
          data: '',
        };
      });
  } catch (error) {
    return {
      success: false,
      message: error.message,
      data: '',
    };
  }
};

export {UpdateUserProfile, UploadUserImage, GetTeacherStats};
