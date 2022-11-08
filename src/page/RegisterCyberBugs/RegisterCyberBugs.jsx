import React from 'react';
import { UserOutlined, LockOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { Input, Button, Space } from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { registerAction } from '../../redux/action/UserCyberBugsAction';
import { NavLink } from 'react-router-dom';

export default function RegisterCyberBugs(props) {
    let dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            name: '',
            phoneNumber: ''
        },

        validationSchema: Yup.object({
            email: Yup.string().required('Email is required').email('Invalid email address'),
            password: Yup.string().required('Password is required').min(6, 'Password must have min 6 characters').max(12, 'Password must be 12 characters'),
            name: Yup.string().required('Name is required'),
            phoneNumber: Yup.string().required('Phone number is required').min(10, 'Phone number must have min 10 characters').max(11, 'Phone number must be 11 characters'),
        }),

        onSubmit: values => {
            let action = registerAction(values);
            dispatch(action);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className='container'>
            <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: window.innerHeight }}>
                <h3>{props.displayName}</h3>
                <div className='mt-3'>
                    <Input name='email' type='email' onChange={formik.handleChange} style={{ minWidth: '300px' }} size="large" placeholder="Email" prefix={<MailOutlined />} />
                    <div className='text-danger'>{formik.errors.email}</div>
                </div>
                <div className='mt-3'>
                    <Input name='password' type='password' onChange={formik.handleChange} style={{ minWidth: '300px' }} size="large" placeholder="Password" prefix={<LockOutlined />} />
                    <div className='text-danger'>{formik.errors.password}</div>
                </div>
                <div className='mt-3'>
                    <Input name='name' type='text' onChange={formik.handleChange} style={{ minWidth: '300px' }} size="large" placeholder="Name" prefix={<UserOutlined />} />
                    <div className='text-danger'>{formik.errors.name}</div>
                </div>
                <div className='mt-3'>
                    <Input name='phoneNumber' type='text' onChange={formik.handleChange} style={{ minWidth: '300px' }} size="large" placeholder="Phone number" prefix={<PhoneOutlined />} />
                    <div className='text-danger'>{formik.errors.phoneNumber}</div>
                </div>
                <Button htmlType='submit' className='mt-3' style={{ backgroundColor: 'rgb(102, 117, 223)', color: '#fff', minWidth: '300px' }}>Register</Button>
                <div className='social mt-3 d-flex'>
                    <small style={{ fontSize: 16 }}>You already have an account? <NavLink to='/login'>Login</NavLink></small>
                </div>
            </div>
        </form>
    )
}