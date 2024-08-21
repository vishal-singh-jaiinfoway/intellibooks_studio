import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import classNames from 'classnames'
import axios from 'axios';

// components
import NioField from '../../../NioField/NioField';
import NioCard from '../../../Cards/NioCard/NioCard';
import NioButton from '../../../NioButton/NioButton';
import NioToaster from '../../../NioToaster/NioToaster';
import useRouteMatch from '../../../../hooks/useRouteMatch';


export default function ContactForm() {
  console.log("envvvvv",process.env.NEXT_PUBLIC_BACKEND_URL)

  const [status, setStatus] = useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    try {
       const response = await axios.post('https://ibprocess.intellibooks.io/api/contactSupport', data);
     // const response = await axios.post('http://localhost:3006/api/contactSupport', data);
     //const response = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/contactSupport`;

      console.log(response.data);
      if (response.data.status === true) {
        setStatus(true);
        reset();
        alert('Email sent Successfully. We will connect soon.');
      } else {
        alert('Failed to send email. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send email. Please try again.');
    }
  };
  

  // Classes 
  const fieldWrapper = classNames({
    "form-control-wrap": true
  });

  return (
    <>
      <NioCard className="rounded-2">
        <NioCard.Body>
          <form onSubmit={handleSubmit(onSubmit)} className="form-submit-init">
            <Row className="g-gs">
              <Col xs={12}>
                <NioField label="Full Name" htmlFor="fname">
                  <NioField.Input id="fname" placeholder="Enter Your Name" errors={errors.name} {...register("name", {
                    required: "field is required"
                  })} />
                </NioField>
              </Col>
              <Col lg={6}>
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
              <Col lg={6}>
                <NioField label="Phone" htmlFor="phone">
                  <NioField.Input type="number" id="phone" placeholder="Enter Your Phone Number" errors={errors.phone} {...register("phone", {
                    required: "field is required"
                  })} />
                </NioField>
              </Col>
              <Col xs={12}>
                <div className="form-group">
                  <div className="form-label-group">
                    <label className="form-label">Tell us a bit about your query</label>
                    <span>
                      <span id="char-count">0</span>/ <span id="char-max" data-char-max="255">255</span>
                    </span>
                  </div>
                  {/*  .form-label-group  */}
                  <div className={fieldWrapper}>
                    <textarea
                      className="form-control"
                      placeholder="Enter your message"
                      {...register("message")}
                    ></textarea>
                  </div>
                </div>
              </Col>
              <Col xs={12}>
                <div className="form-group">
                  <NioButton className='btn-primary'  label="Send Message" />
                </div>
              </Col>
            </Row>
          </form>
        </NioCard.Body>
      </NioCard>
      {status && <NioToaster variant="success text-white" messages={[{ id: 1, header: 'Success', body: 'We have successfully received your message. We will get back to you soon.' }]} />}
    </>
  )
}
