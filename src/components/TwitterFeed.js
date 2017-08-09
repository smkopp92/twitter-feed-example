import React from 'react';
import Tweet from './Tweet';

const TwitterFeed = props => {
  //I have 5 tweet objects in props.data
  //Map those objects into components
  let tweets;

  tweets = props.data.map((tweetObject) => {
    let tweetImage;

    if(tweetObject.entities.media){
      tweetImage = tweetObject.entities.media[0].media_url;
    }

    return (
      <Tweet
        key={tweetObject.id_str}
        text={tweetObject.text}
        userName={tweetObject.user.name}
        favoriteCount={tweetObject.favorite_count}
        favorited={tweetObject.favorited}
        tweetImage={tweetImage}
      />
    )
  })

  return (
    <ul>{tweets}</ul>
  )
}


export default TwitterFeed;
