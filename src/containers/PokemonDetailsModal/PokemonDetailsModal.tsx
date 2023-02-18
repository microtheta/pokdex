import React, { useEffect, useState } from 'react'
import { Modal, TransitionablePortal, Segment, Header } from 'semantic-ui-react'
import usePokemonDetails from "@/hooks/usePokemonDetails";
import PokemonDetailsView from '@/components/PokemonDetails/PokemonDetails';


function DetailsView({
  name
}: { name: string }) {
  const { isLoading, data, isError } = usePokemonDetails(name);

  if (isLoading) {
    return (<Segment loading style={{ height: 150, margin: 0 }} />)
  }

  if(isError) {
    return <Header as='h4'>Error in fetching data.</Header>
  }

  return (
    <PokemonDetailsView data={data} />
  )
}


function PokemonDetailsModal({
  name,
  onClose
}: { name?: string, onClose: () => void }) {

  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(!!name)
  }, [name])

  return (
    <TransitionablePortal onOpen={() => setTimeout(() => document.body.classList.add('modal-fade-in'), 0)} open={open} >
      <Modal
        closeIcon
        open
        closeOnDimmerClick={false}
        onClose={() => { document.body.classList.remove('modal-fade-in'); onClose(); }}
      >
        {name && <DetailsView key={name} name={name} />}
      </Modal>
    </TransitionablePortal>
  )
}

export default PokemonDetailsModal