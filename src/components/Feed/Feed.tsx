import { useEffect, useState } from "react";
import FeedItem from "./FeedItem";
import { Button, Form, TextArea } from 'semantic-ui-react'
import styles from './FeedItem.module.scss';

async function getTweets() {
  const tweets = JSON.parse(localStorage.getItem('tweets') || '[]');
  return Promise.resolve(tweets)
}

async function postTweet(tweet: any) {
  const tweets: any = await getTweets()
  const newTweet = {
    id: `tweet_${tweets.length + 1}`,
    ...tweet
  }
  tweets.unshift(newTweet)
  localStorage.setItem('tweets', JSON.stringify(tweets))
  return Promise.resolve(newTweet)
}

export default function Feed() {
  const [tweets, setTweets] = useState<any[]>([])

  const [tweetText, setTweetText] = useState('');

  const fetchTweets = async () => {
    const tweets = await getTweets();
    setTweets(tweets);
  }

  useEffect(() => {
    fetchTweets();
  }, [])


  const handleSubmit = async (e:any) => {
    e.preventDefault()
    
    const newTweet = {
      "id": new Date().getTime().toString(),
      "created_at": "Wed May 23 06:01:13 +0000 2012",
      "text": tweetText,
      "user": {
        "id": "user_1",
        "name": "John Doe",
        "screen_name": "johndoe",
        "profile_image_url": "https://img.freepik.com/premium-photo/headshot-photo-asian-man-with-laugh-face_39688-1728.jpg?size=626&ext=jpg"
      }
    };
    setTweets([newTweet, ...tweets]);
    setTweetText("");
    await postTweet(newTweet)

    fetchTweets();
    
  }
  return (<div className={styles.feedContainer}>
    <Form className={styles.newFeed} onSubmit={handleSubmit}>
      <TextArea value={tweetText} onChange={(e) => setTweetText(e.target.value)} placeholder='Tell us more' style={{ minHeight: 100 }} />
      <div className={styles.submitBtn}>
        <Button type="submit"> Tweet </Button>
      </div>
    </Form >
    {
      tweets.map((tweet) => (
        <div key={tweet.id} className={styles.feedContainer}>
          <FeedItem tweet={tweet} />
        </div>
      ))
    }
  </div >
  )
}