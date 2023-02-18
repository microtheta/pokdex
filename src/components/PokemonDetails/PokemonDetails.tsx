import { PokemonDetails as PokemonDetailsType } from "@/shared/pokemon.type";
import { getImageSrc } from "@/utils/pokemonImage";
import React from "react";
import { List, Modal, Image, Label, Statistic } from "semantic-ui-react";
import styles from './PokemonDetails.module.scss';

export default function PokemonDetails({
  data
}: { data?: PokemonDetailsType }) {
  return (
    <>
      <Modal.Header className={styles.name}> {data?.name}
      </Modal.Header>
      <Modal.Content image>
        <Image size='medium' src={getImageSrc(data)} wrapped alt={data?.name} className={styles.image} />
        <Modal.Description>
          <div className={styles.row}>

            <div className={styles.col}>
              <span className={styles.label}>Species</span>
              <span className={styles.value}>{data?.species.name}</span>
            </div>
            <div className={styles.col}>
              <span className={styles.label}>Height</span>
              <span className={styles.value}>{data?.height}</span>
            </div>
            <div className={styles.col}>
              <span className={styles.label}>Weight</span>
              <span className={styles.value}>{data?.weight}</span>
            </div>
          </div>

          <div className={styles.row}>
            <span className={styles.label}>Types</span>
            <span className={styles.value}>{data?.types?.map(type => type.type.name).join(', ')}</span>
          </div>

          <div className={styles.row}>
            <span className={styles.label}>Abilities</span>
            <span className={styles.value}>{data?.abilities?.map(ability => ability.ability.name).join(', ')}</span>
          </div>

          <div className={styles.list}>
            <List divided verticalAlign='middle'>
              {
                data?.stats?.map(stat => (
                  <List.Item key={stat.stat.name}>
                    <List.Content floated='right'>
                      <Label circular>{stat.base_stat}</Label>
                    </List.Content>

                    <List.Content >{stat.stat.name}</List.Content>
                  </List.Item>
                ))
              }
            </List>
          </div>
          {/* <div className={styles.list}>
            <Statistic.Group>
              {data?.stats?.map(stat => (
                <Statistic key={stat.stat.name}>
                  <Statistic.Value>{stat.base_stat}</Statistic.Value>
                  <Statistic.Label>{stat.stat.name}</Statistic.Label>
                </Statistic>)
              )}
            </Statistic.Group>
          </div> */}
        </Modal.Description>
      </Modal.Content>
    </>
  )
}