import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import image from '../dnf/dnf.JPG';

class DNFExplanation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Problem Statement</Accordion.Header>
                    <Accordion.Body>
                        Given an array A[] consisting of only 0s, 1s, and 2s. The task is to write a function that sorts the given array. The functions should put all 0s first, then all 1s and all 2s in last.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Description</Accordion.Header>
                    <Accordion.Body>
                        Consider this problem on an array; the task is to sort arrays of 0, 1, and 2 in linear time without any extra space. Since the array is only traversed once, the time complexity of the algorithm given below is O(n).
                        <br></br>
                        Expected T.C = O(n) & Expected S.C = O(n)
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Testcases</Accordion.Header>
                    <Accordion.Body>
                        <strong>Example 1:</strong><br></br>
                        <strong>Input:</strong> nums = [2,0,2,1,1,0]<br></br>
                        <strong>Output:</strong> [0,0,1,1,2,2]<br></br><br></br>
                        <strong>Example 2:</strong><br></br>
                        <strong>Input:</strong> nums = [2,0,1]<br></br>
                        <strong>Output:</strong> [0,1,2]<br></br>
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
                    <strong style={{color:'red'}}>Correct solution video coming soon!</strong>
                        <iframe className='video'
                            title='Youtube player'
                            sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                            src={`https://youtube.com/embed/HwF8ELoA-ZI?autoplay=0`}
                            style={{width:'80rem',height:'35rem', marginLeft:'2%'}}>
                        </iframe>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>);
    }
}

export default DNFExplanation;