/*
 *
 *
 * @author: iusmansultan
 *All apis and backend work of the app is in this file
 *
 *
 */

import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

const UploadImageToServer = async image => {
  try {
    const id = Date.now() + Math.random();
    let imageRef = storage().ref(`images/${id}`);
    await imageRef.putFile(image);
    return {
      success: true,
      message: 'Image uploaded successfully!',
      url: await imageRef.getDownloadURL(),
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
      url: '',
    };
  }
};

const saveImageInFirestore = async body => {
  try {
    const response = await firestore().collection('Posts').doc().set(body);
    return {
      success: true,
      message: 'Image uploaded successfully!',
      res: response,
    };
  } catch (e) {
    console.log(e);
    return {
      success: false,
      message: error.message,
      url: '',
    };
  }
};
const getAllPosts = async () => {
  try {
    const postsCollection = firestore().collection('Posts');
    const postsSnapshot = await postsCollection.get();

    // Array to store promises for fetching user data
    const userPromises = [];

    // Iterate through each post
    postsSnapshot.forEach(postDoc => {
      const postData = postDoc.data();

      // Assume there's a 'userId' field in each post
      const userId = postData.id;

      // Create a promise for fetching user information using the userId
      const userPromise = firestore().collection('Users').doc(userId).get();
      userPromises.push(userPromise);
    });

    // Wait for all user data to be fetched
    const userSnapshots = await Promise.all(userPromises);

    // Combine post and user information
    const postsData = postsSnapshot.docs.map((postDoc, index) => {
      const postData = postDoc.data();
      const userData = userSnapshots[index].data();


      return {
        ...postData,
        user: userData,
      };
    });


    return {
      success: true,
      message: 'All posts data!',
      res: postsData,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: error.message,
      url: '',
    };
  }
};


export {UploadImageToServer, saveImageInFirestore, getAllPosts};
