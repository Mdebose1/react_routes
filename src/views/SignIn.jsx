import React from 'react';

export const SignIn = () => {
    return (
        <div className="row">
            <div className="col-md-6">
                <h2>Sign In</h2>
                <hr />
                <form action="">
                    <div className="form-group">
                    <input type="email" className="form-control" name="email" id="" aria-describedby="helpId" placeholder="Email" />
                    </div>
                    <div className="from-group">
                    <input type="password" className="form-control" name="password" id="" aria-describedby="helpId" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <div className="form-check">
                            <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" name="remeber_me" id="" value="checkedValue" />
                            Remember Me
                        </label>
                        </div>
                    </div>
                </form> 
            </div>
            <div className="col-md-6"></div>
        </div>
    )
}
