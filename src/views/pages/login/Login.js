import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'
import React, { Component } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
 // CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
//import { compose } from 'redux'
// import  { Redirect } from 'react-router-dom'

// import { useHistory } from 'react-router-dom';

 class Login extends Component  {

constructor(){

super();
this.state={
  username:null,
  password:null,
  login:false,
  store:null

}  
}

login()
{

  
   
  fetch('http://localhost/TaskM/public/api/login_check',{
method:"POST",headers: {
  'Content-Type': 'application/json',
  'Accept': 'application/json', 
},body:JSON.stringify(this.state)

  }).then((Response)=>{
    
    Response.json().then((result)=>{
     // console.warn("result",result);
    console.log(result);
      localStorage.setItem('login',JSON.stringify({
         
        token:result.token
        
      }))
      const tokens = result.token;
      tokens ?  this.state.login =true :this.state.login =false  ; 
       
       
    
    })
  })
}
Afterlogin(){

   if (this.state.tokens)
  {
   return "/pages/Tables/List" 
    }
    
}


  render(){
  return (

    <div className="c-app c-default-layout flex-row align-items-center">
    
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                 
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="Username" onChange={(event)=>{this.setState({username:event.target.value})}} autoComplete="username" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" onChange={(event)=>{this.setState({password:event.target.value})}} placeholder="Password" autoComplete="current-password" />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                      
                      <Link to={this.state.login ? '/pages/Tables/List':'/login' }  replace>  

                        <CButton color="primary" onClick={()=>{this.login()}} className="px-4">Login</CButton>
                        </Link>  
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link"  className="px-0">Forgot password?</CButton>
                      </CCol>
                    </CRow>
                   
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                  
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
       
    </div>
  )}
}

export default withRouter(Login);
