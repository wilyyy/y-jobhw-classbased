import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    decrement,
    increment,
    incrementByAmount,
    reset,
    incrementAsync,
    selectCount,
  } from './counterSlice';
import styled from "styled-components";
import { Card, Button } from 'antd';

//styled components set up
const Page = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #85171B;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

const CounterCont = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 40%;
    justify-content: space-evenly;
    align-items: center;
    font-size: 30px;
    font-weight: 700;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 50%;
`;

const Counter = styled.p`
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    border-radius: 10px;
    color: ${props=>props.bgcolor};
    border: 5px solid ${props=>props.bgcolor};
`;

const Input = styled.input`
    width: 50%;
    height: 25px;
`;

const AntCard = styled(Card)`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 300px;
    height: 50%;
    background-color: #F6EFE8;
    color: #151415;
    border-radius: 10px;
    padding: 10px;
`;

const CardCounter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 250px;
    height: 50px;
    background-color: ${props=>props.bgcolor};
    color: #fff;
    box-shadow: inset 0px 0px 20px 3px rgba(0, 0, 0, 0.5);
`;
const AntButton = styled(Button)`
    width: ${props=>props.width};
    height: ${props=>props.height};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F6EFE8;
    color: #333333;
    border-style: none;
    border-radius: 25px;
    font-size: ${props=>props.fontsize};
    font-weight: 700;

    :hover{
        background-color: #2D2B2C;
        color: #F6EFE8;
        transition: 0.5s;
    }

    :active{
        background-color: #000;
        color: #F6EFE8;
        transition: 0s;
    }
`;

const mapStateToProps = state => ({
    count: state.count
});
const mapDispatchToProps = () => ({ 
    increment, 
    decrement,
    reset,
    incrementByAmount,
    incrementAsync
});

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
                <CounterCont>
                    <Row>
                        <AntButton 
                            width="100px"
                            height="70px"
                            fontsize="40px"
                            onClick={()=>{this.setState({ count: this.state.count - 1 })}}    
                        >
                            -
                        </AntButton>
                        <Counter 
                            bgcolor='#fff'
                            color='#fff'
                        >
                            {this.state.count}
                        </Counter>
                        <AntButton 
                            width="100px"
                            height="70px"
                            onClick={()=>{this.setState({ count: this.state.count + 1 })}}
                            fontsize="40px"
                        >
                            +
                        </AntButton>
                    </Row>
                    <Input />
                    <AntButton 
                        width='50%'
                        height='25px'
                    >
                        Add Amount
                    </AntButton>
                    <AntButton 
                        width='50%'
                        height='25px'
                    >
                        Reset
                    </AntButton>
                </CounterCont>

                <AntCard 
                    title="Ant Design Counter"
                >
                    <CardCounter
                        bgcolor='#151415'
                    >
                        {this.state.count}
                    </CardCounter>
                </AntCard>

            </Page>
        )
    }
}

export default AntDesignCounter;