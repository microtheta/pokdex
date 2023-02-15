import React, { useEffect, useState } from 'react'
import { Modal, TransitionablePortal, Segment } from 'semantic-ui-react'
import usePokemonDetails from "@/hooks/usePokemonDetails";
import PokemonDetailsView from '@/components/PokemonDetails/PokemonDetails';


function PokemonDetails({
  name
}: { name: string }) {
  const { isLoading, data } = usePokemonDetails(name);

  if (isLoading) {
    return (<Segment loading style={{ height: 150, margin: 0 }} />)
  }

  return (
    <>
      <PokemonDetailsView data={data} />
    </>
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
    <div>
      <TransitionablePortal onOpen={() => setTimeout(() => document.body.classList.add('modal-fade-in'), 0)} open={open} >
        <Modal
          closeIcon
          open
          closeOnDimmerClick={false}
          onClose={() => { document.body.classList.remove('modal-fade-in'); onClose(); }}
        >
          {name && <PokemonDetails key={name} name={name} />}
        </Modal>
      </TransitionablePortal>

    </div>
  )
}

export default PokemonDetailsModal