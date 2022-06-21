import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import validator from 'validator'
import SignInForm from '../components/forms/SignInForm'
import { isObjectEmpty } from '../helpers/helpers';

export default function SignIn() {

  const [ errors, setErrors ] = useState({});
  const dispatch = useDispatch();

  useEffect(()=>{

  });


  const login = ({email, password}) => {
    const errors = {};
    setErrors(errors);

    if(!validator.isEmail(email)){
      errors.email = "El correo electronico es ivalido";
    }
    if(validator.isEmpty(password)){
      errors.password = "La contraseña no puede estar vacia";
    }

    if(!isObjectEmpty(errors) ){
      setErrors(errors);
      return;
    }


  }

  return (
    <Container className='mt-5'> 
      <Row>
        <Col sm='12' md={{span: 8, offset: 2}} lg={{span: 6, offset: 4}}>
          <Card body>
            <h3> Iniciar sesion </h3>
            <SignInForm errors={errors} onSubmitCallback={login} ></SignInForm>
            <div className='mt-4'>
              <Link to={"/signup"}> No tienes una cuenta? Registre aqui. </Link>
            </div>
          </Card>

        </Col>
      
      </Row>
    </Container>
  )
}
