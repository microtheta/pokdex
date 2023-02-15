import React, { useState } from 'react'
import { Button, Modal, TransitionablePortal } from 'semantic-ui-react'

function ModalExampleDimmer() {

  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Modal</Button>

      <TransitionablePortal onOpen={() => setTimeout(() => document.body.classList.add('modal-fade-in'), 0)} open={open} >
        <Modal
          open
          onClose={() => { document.body.classList.remove('modal-fade-in'); setOpen(false); }}
        >
          <Modal.Header>Use Googles location service?</Modal.Header>
          <Modal.Content>
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </Modal.Content>
          <Modal.Actions>
            <Button negative onClick={() => setOpen(false)}>
              Disagree
            </Button>
            <Button positive onClick={() => setOpen(false)}>
              Agree
            </Button>
          </Modal.Actions>
        </Modal>
      </TransitionablePortal>

    </div>
  )
}

export default ModalExampleDimmer