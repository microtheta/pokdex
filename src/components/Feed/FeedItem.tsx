import { Image, Comment, Header } from "semantic-ui-react"
import styles from './FeedItem.module.scss';

export default function FeedItem({
  tweet
}: { tweet: any }) {
  return (
    <Comment>
      <div className={styles.tweetCard}>

        <div className={styles.tweetUserImage}>
          <Image src={tweet.user.profile_image_url} avatar />
        </div>

        <div className={styles.tweetContent}>

          <Header as='h3' className={styles.userName}>{tweet.user.name}</Header>
          -
          <span>{tweet.created_at}</span>
          <Comment.Text>{tweet.text}</Comment.Text>
        </div>

      </div>
    </Comment>
  )

}