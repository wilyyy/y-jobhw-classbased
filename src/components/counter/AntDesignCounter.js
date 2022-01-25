import React from 'react';
import styled from "styled-components"
import { Card, Button } from 'antd';

//styled components set up
const Page = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #000;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

const AntCard = styled(Card)`
    width: 100px;
    height: 100px;
    background-color: #ccc;
`;

const AntButton = styled(Button)`
    width: 150px;
    height: 50px;
`;

//default component
class AntDesignCounter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
    }

    render() {
        return (
            <Page>
                <AntCard />
                <AntButton>Text</AntButton>
            </Page>
        )
    }
}

export default AntDesignCounter;