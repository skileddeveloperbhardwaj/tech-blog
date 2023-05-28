import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import image from '../jumpgame/jump_game.JPG';

class JumpGameExplanation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Problem Statement</Accordion.Header>
                    <Accordion.Body>
                        Find if we can jump to last index.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Description</Accordion.Header>
                    <Accordion.Body>
                        You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
                        Return true if you can reach the last index, or false otherwise.
                        Expected T.C = O(n) & Expected S.C = O(1)
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Testcases</Accordion.Header>
                    <Accordion.Body>
                        <strong>Example 1:</strong><br></br>
                        <strong>Input:</strong> nums = [2,3,1,1,4]<br></br>
                        <strong>Output:</strong> true<br></br>
                        <strong>Explanation: </strong> Jump 1 step from index 0 to 1, then 3 steps to the last index.<br></br><br></br>
                        <strong>Example 2:</strong><br></br>
                        <strong>Input:</strong> nums = [3,2,1,0,4]<br></br>
                        <strong>Output:</strong> false<br></br>
                        <strong>Explanation: </strong> You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.<br></br>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Explanation</Accordion.Header>
                    <Accordion.Body>
                        <img src={image} style={{ width: '80rem' }} />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>Video</Accordion.Header>
                    <Accordion.Body>
                        {/* <strong style={{color:'red'}}>Correct solution video coming soon!</strong> */}
                        <iframe className='video'
                            title='Youtube player'
                            sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                            src={`https://youtube.com/embed/ciOtR7yGXtk?autoplay=0`}
                            style={{ width: '80rem', height: '35rem', marginLeft: '2%' }}>
                        </iframe>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>);
    }
}

export default JumpGameExplanation;