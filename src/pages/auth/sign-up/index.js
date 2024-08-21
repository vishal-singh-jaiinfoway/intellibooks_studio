import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Col, Form, Row } from 'react-bootstrap';

// layout 
import AuthLayout from '../../../layouts/AuthLayout/AuthLayout';

// components 
import { NioButton, NioToaster, NioCard, NioBrand, NioField } from '../../../components';

export default function Signup() {
  const navigate = useNavigate();
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    'mode': 'onBlur',
    defaultValues: {
     
      email: '',
      password: '',
    }
  });


  const onSubmit = (data) => {
    console.log(data)

   
    setShowSuccess(true)

    // clear field 
    reset()

    // reset isSubmited state after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);

    // redirect to another page 
    navigate('/')
  };

  useEffect(() => {
    if (errors.email && errors.password) {
      // show error message 
      setShowError(true);

      // hide error message after 3 seconds 
      setTimeout(() => {
        setShowError(false);
      }, 3000)
    }
  }, [errors.email, errors.password])


  return (
    <AuthLayout title="Signup" rootClass="layout-1">

      {
        showSuccess && (
          <NioToaster
            variant="success"
            title="Success"
            message='You Have Successfully Signup'

          />
        )
      }
      {
        showError && (
          <NioToaster
            variant='error'
            title='Error'
            message='Please Fill Required Fields'
          />
        )
      }


      <NioCard className="nk-form-card card card-gutter-md nk-auth-form-card mx-md-9 mx-xl-auto" >
      <Link to="/index-analytics">
          <img width="48" height="48" src="https://img.icons8.com/color/48/circled-left-2--v1.png" alt="circled-left-2--v1" />
        </Link>
        <NioCard.Body>
        
          <div className="nk-form-card-head text-center pb-5">
            <div className="form-logo mb-3">
              <NioBrand />
            </div>
            <h3 className="title mb-2">Sign up to your account</h3>
            <p className="text">Already a member? <Link to="https://ibprocess.intellibooks.io/signin" target="_blank" className="btn-link text-primary">Login</Link>.</p>
          </div>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row className="gy-4">
              <Col xs={12}>
                <NioField label="Email" htmlFor="email">
                  <NioField.Input type="email" id="email" placeholder="Enter Your Email" errors={errors.email} {...register("email", {
                    required: "field is required",
                    pattern: {
                      value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "invalid email address"
                    }
                  })} />
                </NioField>
              </Col>
              
              <Col xs={12}>
                <div className="form-group">
                  <NioButton
                    label="Sign Up"
                    className="btn-block btn-primary" />
                </div>
              </Col>
            </Row>
          </Form>
          
         
        </NioCard.Body>
      </NioCard>
    </AuthLayout >
  )
}
