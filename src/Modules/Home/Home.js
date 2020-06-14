import React, {useState, useEffect} from "react";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { increaseNumber, decreaseNumber, calculateNumber, getActivity } from './HomeAction';
import styled from 'styled-components';

const Flex = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  width: 100%;
`

const Button = styled.button`
  padding: 1rem 2rem;
  margin: 0 1rem;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1.5rem;

  &:disabled{
    background-color: #aeaeae;
  }
`

const Input = styled.input`
  padding: 1rem 2rem;
  border: 2px solid #3498db;
  border-radius: 5px;
  width: 100%;
`

const Text = styled.p`
  font-size: 3rem;
  font-weight: bold;
`

function Home(props) {
  console.log(props, "PROPS")

  let [univName, setUnivName] = useState("")

  // useEffect(() => {
  //   props.getActivity()
  // }, [])

  return(
    <React.Fragment>
      <br />
      <Flex>
        <Input type="text" value={univName} onChange={e => setUnivName(e.target.value)} placeholder="masukkan nama kota"/>
      </Flex>

      <Flex>
        <Button onClick={() => props.decreaseNumber(props.homePayload.num)}> 
          - 
        </Button>
        <Text>{props.homePayload.num}</Text>
        <Button onClick={() => props.increaseNumber(props.homePayload.num)}> 
          + 
        </Button>
      </Flex>

      <br />
      <Flex>
        <Button onClick={() => props.getActivity(univName)} disabled={!!!univName}>Get University</Button>
      </Flex>
      <Text>{props.homePayload.loading && "Lagi loading..."}</Text>
      <br />
      {props.homePayload.result && props.homePayload.result.map((univ, idx) => {
        if(idx < props.homePayload.num) return <li> { univ.name } </li>
        return;
      })}

      {/* <Button onClick={() => props.calculateNumber(props.homePayload.num)}>
        process
      </Button>
      <Text>{props.homePayload.factorialResult}</Text> */}

      <br />
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    homePayload: state.Home
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    increaseNumber,
    decreaseNumber,
    calculateNumber,
    getActivity
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);