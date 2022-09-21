import React from 'react';
import './signup.css';



const Signup = () => {
    
    return (
        <section className='signup'>
            <div className='container mt-5'>
                <div className='signup-content'>
                    <div className='signup-form'>
                        <h2 className='form-title'>Sign Up</h2>
                        <form className='register-form' id='register-form'>
                            <div className='form-group'>
                                <label htmlFor='name'>
                                    <i class="fa-solid fa-user-plus"></i>
                                </label>
                                <input type="text" name='name' id='name' autoComplete='off' placeholder='Name' />
                            </div>

                            <div className='form-group'>
                                <label htmlFor='email'>
                                    <i class="fa-solid fa-user-plus"></i>
                                </label>
                                <input type="text" name='name' id='name' autoComplete='off' placeholder='email' />
                            </div>

                            <div className='form-group'>
                                <label htmlFor='phone'>
                                    <i class="fa-solid fa-user-plus"></i>
                                </label>
                                <input type="number" name='phone' id='name' autoComplete='off' placeholder='Mobile Number ' />
                            </div>

                            <div className='form-group'>
                                <label htmlFor='work'>
                                    <i class="fa-solid fa-user-plus"></i>
                                </label>
                                <input type="text" name='name' id='name' autoComplete='off' placeholder='Your Profession' />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='password'>
                                    <i class="fa-solid fa-user-plus"></i>
                                </label>
                                <input type="password" name='name' id='name' autoComplete='off' placeholder='Password' />
                            </div>

                            <div className='form-group'>
                                <label htmlFor='c'>
                                    <i class="fa-solid fa-user-plus"></i>
                                </label>
                                <input type="c" name='name' id='name' autoComplete='off' placeholder='Confirm Password' />
                            </div>
                            <div className='form-group from-button'>
                                <input type='submit' name='signup' id='signup' className='form-submit' value='Register'></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Signup;