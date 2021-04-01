import logo from '../../assets/logo.svg'

import {Container,Content} from './styles'


interface HeaderProps {
    onOpenNewTransationModal: ()=> void;
}

export function Header ({onOpenNewTransationModal}: HeaderProps) {

    return(
        <Container>
            <Content>
                <img src={logo} alt="Logo"/>
                <button type="button" onClick={onOpenNewTransationModal} >
                    Nova transação
                </button>
               
            </Content>
        </Container>
    )
}