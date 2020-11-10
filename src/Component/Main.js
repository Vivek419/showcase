import React, { useState, useEffect } from 'react';
import Modal from 'react-modal'
import { useDispatch, useSelector } from "react-redux";
import styled, { css } from 'styled-components'
import { Add_To_List } from '../redux/action'




const Button = styled.button`
  background: #9B9897;
  border: 2px solid #9B9897;
  color: black;
  margin: 0.5em 1em;
  padding: 0.25em 1em;`
const style = {
    content: {
        border: '0',
        bottom: 'auto',
        minHeight: '40%',
        left: '45%',
        padding: '15px',
        position: 'fixed',
        right: 'auto',
        top: '50%',
        transform: 'translate(-40%,-40%)',
        minWidth: '20rem',
        width: '50%',
        maxWidth: '42rem',
        backgroundColor: "#ABAFB3"
    }
};


export default function MainPage(props) {
    const bookM = useSelector((state) => state);
    console.log("vivek", bookM);
    const dispatch = useDispatch();

    const [get, set] = useState(props.location.state.name);
    const [getnew, setnew] = useState()
    const [getModal, setModal] = useState(false);

    const handleChange = (e) => {
        console.log(e.target.value)
        var result = (e.target.value)
        setnew(result)


    };
    const handleblock = (e) => {

        dispatch(Add_To_List(e));

    };


    return (
        <>
            <div style={{ marginTop: "8%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div>
                    <p>Welcome to {get}'s education page</p>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Button onClick={() => { setModal(true) }}>Add new education</Button>

                    </div>
                </div> <br />
            </div>
            <div style={{ marginRight: "15%" }}>
                <tr style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "15px" }}>
                    <td><div style={{ height: "300px", width: "160px", backgroundColor: "#9B9897", margin: "15px", marginBottom: "120px" }}>
                        <div style={{ padding: "4px", marginLeft: "8px" }}>
                            <h5><b>Showcase University</b></h5>
                            <p style={{ fontSize: "small" }}>Forward Bootcamp</p>
                            {bookM.map((item) => {
                                return (
                                    <p style={{ fontSize: "small" }}>{item}</p>
                                )
                            })}
                        </div>
                    </div></td>
                    <td><tr><td><div style={{ height: "200px", width: "500px", backgroundColor: "#9B9897", margin: "8px" }}>
                        <div style={{ padding: "1px", marginLeft: "8px" }}> <h4><b>Graduate Computer Science @ Showcase University</b></h4>
                            <p style={{ fontSize: "small" }}>August 2019 - Present</p>
                            <ul>
                                <li><p style={{ fontSize: "small" }}>"Not all those who wonder are lost"</p></li>
                                <li><p style={{ fontSize: "small" }}>"Not all those who wonder are lost"</p></li>
                                <li><p style={{ fontSize: "small" }}>"Not all those who wonder are lost"</p></li>

                            </ul>
                        </div>

                    </div>
                        <div style={{ height: "200px", width: "500px", backgroundColor: "#9B9897", margin: "8px" }}></div></td>
                    </tr></td>
                </tr>

            </div>
            <Modal isOpen={getModal} style={style}>
                <h4>New Education Model</h4>
                <input type="text" placeholder="add new education" style={{ height: "4ch" }} onChange={(e) => handleChange(e)} />
                <input type="button" value="Add" style={{ marginLeft: "0%", marginTop: "0%" }} onClick={(e) => handleblock(getnew)} />
                <input type="button" value="Save" style={{ marginLeft: "90%", marginTop: "40%" }} onClick={() => { setModal(false) }} />
            </Modal>
        </>
    );
}