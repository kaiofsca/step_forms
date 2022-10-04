import * as C from '@chakra-ui/react'

const FormAddress = () => {
    return (
        <C.VStack spacing={5}>
            <C.Input placeholder="Cidade" borderColor="blue.700" />
            <C.Input placeholder="Rua" borderColor="blue.700" />
            <C.Input placeholder="CEP" borderColor="blue.700" />   
        </C.VStack>
    )
}

export default FormAddress