/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-console */
import React from 'react';
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
} from 'formik';
import * as Yup from 'yup';

function ContactBody() {
  return (
    <main className="mb-4">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            <p>
              Want to get in touch? Fill out the form below to send me a message
              and I will get back to you as soon as possible!
            </p>
            <div className="my-5">
              <Formik
                initialValues={{ firstName: '', lastName: '', email: '' }}
                validationSchema={Yup.object({
                  name: Yup.string()
                    .required('A name is required.')
                    .min(2, 'Name is too short.')
                    .max(30, 'Name is too long.'),
                  email: Yup.string()
                    .matches(/^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/, 'Email is not valid.')
                    .required('An email is required.'),
                  phone: Yup.string()
                    .matches(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, 'Phone number is invalid')
                    .required('A phone number is required.'),
                  message: Yup.string()
                    .required('A message is required.'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    // eslint-disable-next-line no-alert
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 400);
                }}
              >
                <Form id="contactForm">
                  <div className="form-floating">
                    <Field className="form-control" id="name" name="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                    <label htmlFor="name">Name</label>
                    <div className="invalid-email">
                      <ErrorMessage name="name" />
                    </div>
                  </div>
                  <div className="form-floating">
                    <Field className="form-control" id="email" name="email" type="email" placeholder="Enter your email..." data-sb-validations="required,email" />
                    <label htmlFor="email">Email address</label>
                    <div className="invalid-email">
                      <ErrorMessage name="email" />
                    </div>
                  </div>
                  <div className="form-floating">
                    <Field className="form-control" id="phone" name="phone" type="tel" placeholder="Enter your phone number..." data-sb-validations="required" />
                    <label htmlFor="phone">Phone Number</label>
                    <div className="invalid-email">
                      <ErrorMessage name="phone" />
                    </div>
                  </div>
                  <div className="form-floating">
                    <Field className="form-control" id="message" name="message" placeholder="Enter your message here..." style={{ height: '12rem' }} data-sb-validations="required" />
                    <label htmlFor="message">Message</label>
                    <div className="invalid-email">
                      <ErrorMessage name="message" />
                    </div>
                  </div>
                  <br />
                  <button className="btn btn-primary text-uppercase disabled" id="submitButton" type="submit">Send</button>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ContactBody;
