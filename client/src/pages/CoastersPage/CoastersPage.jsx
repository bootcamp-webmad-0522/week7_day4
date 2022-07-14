import { useState, useEffect } from "react"
import coastersService from "../../services/coaster.services"

import { Container, Modal } from 'react-bootstrap'
import CoastersList from "../../components/CoastersList/CoastersList"
import CoasterForm from "../../components/CoasterForm/CoasterForm"
import Loader from "../../components/Loader/Loader"

const CoastersListPage = () => {

    const [coasters, setCoasters] = useState([])
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        loadCoasters()
    }, [])


    const loadCoasters = () => {
        coastersService
            .getCoasters()
            .then(({ data }) => setCoasters(data))
            .catch(err => console.error(err))
    }

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    return (

        <>

            <Container>

                <h1>Galería de montañas rusas <span onClick={openModal}>+</span></h1>
                <hr />
                {
                    coasters.length ? <CoastersList coasters={coasters} /> : <Loader />
                }

            </Container>

            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Nueva montaña rusa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CoasterForm closeModal={closeModal} refreshCoasters={loadCoasters} />
                </Modal.Body>
            </Modal>

        </>
    )
}

export default CoastersListPage