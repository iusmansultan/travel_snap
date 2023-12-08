module.exports = {
  baseUrl: 'https://schooler.herokuapp.com/api/v1/schooler', //dev baseUrl

  // ALL END POINTS OF THE APP CALLED TO ACCESS BACKEND
  apiEndPoints: {
    // END POINTS RELATED TO QUESTIONS
    QUESTIONS: {
      GET_QUESTIONS: '/question',
      POST_QUESTIONS: '/question/post-question',
    },
    // End points for Offers
    OFFERS: {
      SEND_OFFER: '/offer',
      GET_STUDENTS_OFFERS: '/offer/student/',
      ACCEPT_OR_REJECT_OFFER: '/offer/update-offer/',
    },
    // End points for Orders
    ORDERS: {
      GET_STUDENT_ORDERS: '/orders/student/',
      GET_TEACHER_ORDERS: '/orders/teacher/',
      COMPLETE_ORDER: '/orders/status/',
    },
    SUPPORT: {
      SEND_MESSAGE: '/support',
    },
    // Users CRUD Updates
    USER: {
      UPDATE_USER_PROFILE: '/user/profile/update/',
      CREATE_USER: '/user/createUser',
      GET_USER_DETAILS: '/user/getDetails/',
      UPLOAD_USER_IMAGE: '/uploadImage',
      GET_TEACHER_STATS: '/user/stats/',
    },
    // save user device token
    TOKEN: {
      SAVE_USER_TOKEN: '/saveToken',
    },
  },
};