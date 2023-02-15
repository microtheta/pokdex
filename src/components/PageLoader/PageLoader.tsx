import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'
import styles from './PageLoader.module.scss';

const LoaderExampleSizesInverted = () => (
  <div className={styles.page}>
    <Dimmer active inverted>
      <Loader size='large'>Loading</Loader>
    </Dimmer>
  </div>
)

export default LoaderExampleSizesInverted