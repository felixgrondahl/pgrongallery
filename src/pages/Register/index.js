import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { MainModal, GradientField, CenteredForm } from '../../styles/generic/Containers';
import { Button } from '../../styles/generic/Button';
import { TextInput } from '../../styles/generic/TextInput';
import PortalModal from '../../components/Modal/PortalModal/';

const Register = (props) => {
    let params = new URLSearchParams(props.location.search);
    const location = useLocation();
    const history = useHistory();

    return (
        params.get("register") && (
            <div>
            <PortalModal onClick={() => history.push(location.pathname)}>
            <MainModal onClick={(event) => event.stopPropagation()}>
                    <CenteredForm>
                        <h1 style={{marginTop: '0px', marginBottom: '20px'}}>REGISTER</h1>
                        <GradientField style={{width: '100%', padding: '15px 10px'}}>
                            <form>
                                <TextInput type="text" placeholder="Email Adress" style={{marginTop: '0px'}}></TextInput>
                                <TextInput type="password" placeholder="Password"></TextInput>
                                <TextInput style={{marginBottom: '0px'}} type="password" placeholder="Confirm Password"></TextInput>
                            </form>
                        </GradientField>
                        <div style={{margin: '10px 10px'}}>

                            <input style={{marginRight: '10px', verticalAlign: 'middle'}} type='checkbox' name='checkbox' />
                            <label style={{verticalAlign: 'middle'}} for='checkbox'>I accept the Privacy Policy</label>
                        </div>
                        {/* <p style={{margin: '20px 0px'}}>I accept the privacy agreement</p> */}
                        <Button big height={'45px'} style={{width: '100%', marginBottom: '0px'}}>REGISTER</Button>
                    </CenteredForm>

                </MainModal>
            </PortalModal>
            </div>

        ));
}

export default Register;