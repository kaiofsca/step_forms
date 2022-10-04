import * as C from '@chakra-ui/react'

const FormPersonalDetails = () => {
    return (
        <C.VStack spacing={5}>
            <C.Input placeholder="Nome completo" borderColor="blue.700" />
            <C.Input placeholder="CPF" borderColor="blue.700" />
            <C.Input placeholder="Celular" borderColor="blue.700" />   
        </C.VStack>
    )
}

export default FormPersonalDetails