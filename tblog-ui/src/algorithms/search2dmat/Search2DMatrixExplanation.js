import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import image from '../search2dmat/search2dmat.JPG';
import CodeEditor from "../CodeEditor";

class Search2DMatrixExplanation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Problem Statement</Accordion.Header>
                    <Accordion.Body>
                    Given a mxn 2D matrix, search for a value 'target'in it.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Description</Accordion.Header>
                    <Accordion.Body>
                    Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix.
                    This matrix has the following properties:
                    <ul>
                        <li>
                            Integers in each row are sorted in ascending from left to right.
                        </li>
                        <li>
                            Integers in each column are sorted in ascending from top to bottom.
                        </li>
                    </ul>
                        Expected T.C = O(m+n) & Expected S.C = O(1)
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Testcases</Accordion.Header>
                    <Accordion.Body>
                        <strong>Example 1:</strong><br></br>
                        <strong>Input:</strong>  [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5<br></br>
                        <strong>Output:</strong> true<br></br>
                        <strong>Explanation: </strong> 5 is present at (1,2)<br></br><br></br>
                        <strong>Example 2:</strong><br></br>
                        <strong>Input:</strong>matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20<br></br>
                        <strong>Output:</strong> false<br></br>
                        <strong>Explanation: </strong> 20 is not present in the matrix<br></br>
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
                            src={`https://youtube.com/embed/4brI1pKxaNQ?autoplay=0`}
                            style={{ width: '80rem', height: '35rem', marginLeft: '2%' }}>
                        </iframe>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                    <Accordion.Header>Code</Accordion.Header>
                    <Accordion.Body>
                        <CodeEditor/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>);
    }
}

export default Search2DMatrixExplanation;