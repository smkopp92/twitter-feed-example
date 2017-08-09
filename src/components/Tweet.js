import React from 'react';

const Tweet = (props) => {
  let favoritedClassName = "";

  if(props.favorited){
    favoritedClassName = "red"
  }

  let icon = <div className={favoritedClassName}>
    <i className="fa fa-heart" aria-hidden="true"/> {props.favoriteCount}
  </div>

  let imageTag;

  if(props.tweetImage){
    imageTag = <img src={props.tweetImage} height={100} width={100}/>
  }

  return (
    <li>
      <div>
        {props.text} - {props.userName} {icon}
      </div>
      {imageTag}
    </li>
  )
};

export default Tweet;
