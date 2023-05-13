import React from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

class ProblemList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Table striped>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Problem</th>
                            <th>Topic</th>
                            <th>Level</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>
                                <Nav.Item>
                                    <Nav.Link to="/tech-blog/algorithms/maxvowel/" as={Link} style={{ color: 'blue' }}><u>Max Vowel</u></Nav.Link>
                                </Nav.Item>
                            </td>
                            <td>Sliding Window</td>
                            <td>Medium</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>
                                <Nav.Item>
                                    <Nav.Link to="/tech-blog/algorithms/maxvowel/" as={Link} style={{ color: 'blue' }}><u></u></Nav.Link>
                                </Nav.Item>
                            </td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
            </>
        )
    }
}

export default ProblemList;