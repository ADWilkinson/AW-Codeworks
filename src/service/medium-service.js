import BaseService from "./base-service";
import { endpoints } from "./endpoints";
const profileBaseUrl = "https://medium.com/@andywilkinson1993/";

export default class MediumService extends BaseService {
  constructor() {
    super();
  }

  // This service retrieves our blog posts from our firebase cloud function
  async GetMediumData() {
    return await new Promise((resolve, reject) => {
      this.api
        .get(endpoints.getMediumData)
        .then(response => {
          let resData = this.processMediumData(response.data);
          resolve(resData);
        })
        .catch(error => reject(error));
    });
  }

  processMediumData(data) {
    // Cleaning up the response object and creating a new structure that the UI components can easily process
    if (data !== null || data !== typeof undefined) {
      let slicedData = data.replace("])}while(1);</x>", "");
      let res = JSON.parse(slicedData);

      let userRefs = res.payload.references;
      let user = Object.values(userRefs.User);
      let posts = Object.values(userRefs.Post);
      let social = Object.values(userRefs.SocialStats);

      // User profile processed object
      let userProfile = {
        bio: user[0].bio,
        name: user[0].name,
        followers: social[0].usersFollowedByCount
      };

      // User blog posts processed array
      let userPosts = [];

      for (let values of posts) {
        userPosts.push({
          title: values.title,
          subtitle: values.content.subtitle,
          readingTime: values.virtuals.readingTime,
          wordCount: values.virtuals.wordCount,
          url: profileBaseUrl + values.uniqueSlug
        });
      }

      // Combined object for UI component use
      let responseObj = {
        user: userProfile,
        posts: userPosts
      };

      return responseObj;
    }
  }
}
