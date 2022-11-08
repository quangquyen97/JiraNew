import React from 'react';
import { MailOutlined, LockOutlined, FacebookOutlined, TwitterOutlined, UserAddOutlined } from '@ant-design/icons';
import { Input, Button, Space, Tooltip } from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../redux/action/UserCyberBugsAction';
import { history } from './../../App';

export default function LoginCyberBugs(props) {
    let dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },

        validationSchema: Yup.object({
            email: Yup.string().required('Email is required').email('Invalid email address'),
            password: Yup.string().required('Password is required').min(6, 'Password must have min 6 characters').max(12, 'Password must be 12 characters'),
        }),

        onSubmit: values => {
            let action = loginAction(values);
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
                <Button htmlType='submit' className='mt-3' style={{ backgroundColor: 'rgb(102, 117, 223)', color: '#fff', minWidth: '300px' }}>Login</Button>
                <div className='social mt-3 d-flex'>
                    <Space>
                        <Button style={{ backgroundColor: 'rgb(59, 89, 152)' }} shape='circle' size='large' type="primary" icon={<FacebookOutlined />}></Button>
                        <Button className='ml-3' shape='circle' size='large' type="primary" icon={<TwitterOutlined />}></Button>
                        <Tooltip title="Create an account">
                            <Button style={{ backgroundColor: '#eb2f96', border: '#eb2f96' }} className='ml-3' shape='circle' size='large' type="primary" icon={<UserAddOutlined />} onClick={() => {
                                history.push('/register');
                            }}></Button>
                        </Tooltip>
                    </Space>
                </div>
            </div>
        </form>
    )
}