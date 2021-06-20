          
import React, { Component } from 'react';
import { DocsLink } from 'src/reusable'
import CIcon from '@coreui/icons-react'
// import DateTimePickerInput from 'coreui/lib/components/DateTimePickerInput';
import DateTimePickerInput from 'react-datetime-picker';
import Moment from 'moment';
import {  CButton, CCard,  CCardBody, CCardHeader,
    CCol,
    CForm,
    CFormGroup,
    CFormText,
    CInput,
    CInputFile,
    CLabel,
    CSelect,
    CRow } from '@coreui/react'          

 class AddTables extends Component {



    constructor (){


            super();
            this.state =  {  
              title:'',   description:'', priority_level:'',   date_completion:'', 
                            }
            this.title = this.title.bind(this);
          
            this.description = this.description.bind(this);
            this.priority_level = this.priority_level.bind(this);
      
            this.date_completion = this.date_completion.bind(this);
    }

    title(event){
    this.setState({title: event.target.value})
    }
    description(event){
        this.setState({description: event.target.value})
    }
    priority_level(event){
        this.setState({priority_level: event.target.value})
        }
  
    date_completion(event){
    this.setState({date_completion: event.target.value})
    }
  

    Reg(event){

                fetch('http://localhost/TaskM/public/api/tasks', 
                {
           
            method:"POST",headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json', 
            },
                body: JSON.stringify({
                  title: this.state.title,
                  description: this.state.description,
                  priority_level: parseInt(this.state.priority_level),
                  date_completion:  this.state.date_completion,
                   
                   
                                    })
            }).then((Response) => Response.json())




                .then((Result) =>{
                if (Result.Status = 'Created')
                {this.props.history.push("/pages/Tables/List");
                console.log(Result.Status)
                }
                // else
                // alert('Sorrrrrry !!!! Un-authenticated User !!!!!')
                // console.log(Result.Status);
            } 



            )


            
        }



          render() {
            return (
              <CRow>
              <CCol xs="12" md="6">
                <CCard>
                  <CCardHeader>
                  Nouvel 
                    <small> Task</small>
                  </CCardHeader>
                  <CCardBody>
                    <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                      
                      <CFormGroup row>
                        <CCol md="3">
                          <CLabel htmlFor="text-input">title</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                          <CInput id="text-input" onChange={this.title.bind(this)} placeholder="title" />
                           
                        </CCol>
                      </CFormGroup>
                      <CFormGroup row>
                        <CCol md="3">
                          <CLabel htmlFor="text-input">description</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                          <CInput id="text-input" onChange={this.description.bind(this)} placeholder="description" />
                          
                        </CCol>
                      </CFormGroup>
                      <CFormGroup row>
                        <CCol md="3">
                          <CLabel htmlFor="text-input">priority level</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                          {/* <CInput id="text-input" onChange={this.priority_level.bind(this)} placeholder="priority_level" /> */}
                          <CSelect custom onChange={this.priority_level.bind(this)} id="select">
                     
                      <option value="1">priority 1</option>
                      <option value="2">priority 2</option>
                      <option value="3">priority 3</option>
                      <option value="4">priority 4</option>
                      <option value="5">priority 5</option>
                    </CSelect>
                          
                        </CCol>
                      </CFormGroup>  <CFormGroup row>
                        <CCol md="3">
                          <CLabel htmlFor="text-input">date of completion</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                      
                       <CInput type="date"   id="date-input" onChange={this.date_completion.bind(this)} placeholder="date of completion" />
                      
                      
   
                        </CCol>
                      </CFormGroup>    
                       
                  
                      
                    </CForm>
                  </CCardBody>
                  
                    <CButton type="submit" size="sm" onClick={this.Reg.bind(this)}  color="primary"> Submit</CButton>
                    
                  
                </CCard>
                
              </CCol>
              
            </CRow>
            
            
            );
            }
          }
 export default AddTables
