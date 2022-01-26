import React from 'react';
import { connect } from 'react-redux';
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

const mapStateToProps = (state) => {
    return {
        count: state.counter.value
    }
};

const mapDispatchToProps = (dispatch) => { 
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement()),
        reset: () => dispatch(reset()),
        incrementByAmount: () => dispatch(incrementByAmount()),
        incrementAsync: () => dispatch(incrementAsync()),
        selectCount: () => dispatch(selectCount()),
    }   
};

//default component
class AntDesignCounter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            incrementAmount: '2'
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
                            onClick={() => this.props.decrement()}
                        >
                            -
                        </AntButton>
                        <Counter 
                            bgcolor={this.props.count % 2 !== 0 ? 'green' : '#fff'}
                            color={this.props.count % 2 !== 0 ? 'green' : '#fff'}
                        >
                            <p>{this.props.count}</p>
                        </Counter>
                        <AntButton 
                            width="100px"
                            height="70px"
                            fontsize="40px"
                            onClick={() => this.props.increment()}
                        >
                            +
                        </AntButton>
                    </Row>
                    <Input 
                        value={this.state.incrementAmount}
                        onChange={e => this.setState( {incrementAmount : e.target.value} )}
                    />
                    <AntButton 
                        width='50%'
                        height='25px'
                        onClick={() => this.props.incrementByAmount(Number(this.state.incrementAmount))}
                    >
                        Add Amount
                    </AntButton>
                    <AntButton 
                        width='50%'
                        height='25px'
                        onClick={() => this.props.reset()}
                    >
                        Reset
                    </AntButton>
                </CounterCont>

                <AntCard 
                    title="Ant Design Counter"
                >
                    <CardCounter
                        bgcolor={this.props.count % 2 !== 0 ? 'green' : '#151415'}
                    >
                        {this.props.count}
                    </CardCounter>
                </AntCard>

            </Page>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AntDesignCounter);