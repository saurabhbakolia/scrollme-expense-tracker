import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, RadioGroup } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { GlobalContext } from '../../context'

const TransactionForm = ({ onClose, isOpen }) => {
    const { formData, setFormData, value, setValue, handleFormSubmit } = useContext(GlobalContext);

    function handleFormChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    function handleSubmit(event) {
        event.preventDefault();
        handleFormSubmit(formData);
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <form onSubmit={handleSubmit}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add New Transaction</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <FormLabel>Enter Description</FormLabel>
                            <Input
                                placeholder="Enter Transaction description"
                                name="description"
                                type="text"
                                onChange={handleFormChange}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Enter Amount</FormLabel>
                            <Input
                                placeholder="Enter Transaction amount"
                                name="amount"
                                type="number"
                                onChange={handleFormChange}
                            />
                        </FormControl>
                        <RadioGroup mt={"5"} value={value} onChange={setValue}>
                            <Radio
                                checked={formData.type === 'income'}
                                value='expense'
                                colorScheme='red'
                                name='type'
                                onChange={handleFormChange}
                                mr={"4"}
                            >
                                Expense
                            </Radio>
                            <Radio
                                value="income"
                                colorScheme='blue'
                                name='type'
                                checked={formData.type === 'expense'}
                                onChange={handleFormChange}
                            >
                                Income
                            </Radio>
                        </RadioGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button mr={"4"} onClick={onClose}>Cancel</Button>
                        <Button onClick={onClose} type='submit'>Add</Button>
                    </ModalFooter>
                </ModalContent>
            </form>
        </Modal>
    )
}

export default TransactionForm