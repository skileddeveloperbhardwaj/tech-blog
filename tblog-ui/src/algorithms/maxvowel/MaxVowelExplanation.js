import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import image from '../dnf/dnf.JPG';

class MaxVowelExplanation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Problem Statement</Accordion.Header>
                    <Accordion.Body>
                        Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.<br></br>
                        Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Description</Accordion.Header>
                    <Accordion.Body>
                        Expected T.C = O(n) & Expected S.C = O(n)
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Testcases</Accordion.Header>
                    <Accordion.Body>
                        <strong>Example 1:</strong><br></br>
                        <strong>Input:</strong>  s = "abciiidef", k = 3<br></br>
                        <strong>Output:</strong> 3<br></br>
                        <strong>Explanation: </strong> The substring "iii" contains 3 vowel letters.<br></br><br></br>
                        <strong>Example 2:</strong><br></br>
                        <strong>Input:</strong> s = "aeiou", k = 2<br></br>
                        <strong>Output:</strong> 2<br></br>
                        <strong>Explanation: </strong> Any substring of length 2 contains 2 vowels.<br></br>
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
                            src={`https://youtube.com/embed/2rzPt6lpGWs?autoplay=0`}
                            style={{ width: '80rem', height: '35rem', marginLeft: '2%' }}>
                        </iframe>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>);
    }
}

export default MaxVowelExplanation;