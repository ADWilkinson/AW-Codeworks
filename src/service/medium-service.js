import BaseService from './base-service';

export default class MediumService extends BaseService {
  constructor() {
    super();
  }

  async GetMediumData() {
    return await new Promise((resolve, reject) => {
      this.api
        .get('https://us-central1-awcodeworks.cloudfunctions.net/mediumData')
        .then(response => {
          let resData = processMediumData(response);
          resolve(resData);
        })
        .catch(error => reject(error));
    });
  }
  
  const processMediumData = (data) => {
   
  let res = JSON.parse(data);
  let userRefs = resObj.payload.references;
  let user = Object.values(userRefs.User);
  let posts = Object.values(userRefs.Post);
  let social = Object.values(userRefs.SocialStats);
  
  let userProfile = {
    bio: user.bio,
    name: user.name,
    followers: social.userFollowedByCount
  };
  
  let userPosts = [];
  
  for(values of convertedPosts)
  {
    userPosts.push({
      title: values.title,
      subtitle: values.content.subtitle,
      readingTime: values.virtuals.readingTime,
      wordCount: values.virtuals.wordCount
    }); 
  } 
  
  let responseObj = {
    user: userProfile,
    posts: userPosts
  };
  
  return responseObj;
 
  }
}
