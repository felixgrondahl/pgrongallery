import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { MainModal, GradientField, CenteredForm } from '../../styles/generic/Containers';
import { Button } from '../../styles/generic/Button';
import { TextInput } from '../../styles/generic/TextInput';
import PortalModal from '../../components/Modal/PortalModal/';

const Login = (props) => {
    let params = new URLSearchParams(props.location.search);
    const location = useLocation();
    const history = useHistory();

    return (
        params.get("login") && (
            <PortalModal onClick={() => history.push(location.pathname)}>

                <MainModal onClick={(event) => event.stopPropagation()}>
                    <CenteredForm>
                        <h1 style={{marginTop: '0px', marginBottom: '20px'}}>LOGIN</h1>
                        <GradientField style={{width: '100%', padding: '15px 10px'}}>
                            <form>
                                <TextInput type="text" placeholder="Email Adress" style={{marginTop: '0px'}}></TextInput>
                                <TextInput type="password" placeholder="Password"></TextInput>
                                <Button big height={'45px'} style={{width: '100%', marginBottom: '0px'}}>LOGIN</Button>
                            </form>
                        </GradientField>
                        <p style={{marginTop: '20px'}}>Don't have an account? <u>Register here</u></p>
                        <p style={{marginTop: '10px'}}>Forgot your password?</p>
                    </CenteredForm>

                </MainModal>

            </PortalModal>
        ));
}

export default Login;