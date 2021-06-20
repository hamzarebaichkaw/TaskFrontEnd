import React, { useState } from 'react'
import {

  CCardBody,
  
  CDataTable,
  
  CButton,
  CCollapse,
  
    CLink,
  CCol
  
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'

const ListTables = () => {
            const [active, setActive] = useState(1)
            const [data, setData] = React.useState([]);

                fetch('http://localhost/TaskM/public/api/tasks',   {
                    method : 'get',
                    headers : {
                  'Accept': 'application/json', 
                  'Content-Type': 'application/json'
                  
                  
                }})
            .then(response => response.json())
            .then(res => setData(res));
            //console.log(data);

            const [details, setDetails] = useState([])
            // const [items, setItems] = useState(usersData)

            const toggleDetails = (index) => {
                const position = details.indexOf(index)
                let newDetails = details.slice()
                if (position !== -1) {
                newDetails.splice(position, 1)
                } else {
                newDetails = [...details, index]
                }
                setDetails(newDetails)
            }
            const RemouveButton = (id) =>  {
                    fetch(`http://localhost/TaskM/public/api/tasks/${id}`, {
                        method: 'DELETE'
                    });
                }

            const fields = [
            { key: 'id', _style: { width: '10%'} },                
                { key: 'title', _style: { width: '20%'} },
                { key: 'description',label: 'description ', _style: { width: '20%'} },
                { key: 'priority_level', label: 'priority level', _style: { width: '20%'} },
                { key: 'validation', label: 'validation', _style: { width: '10%'} },
                
                { key: 'date_completion', label: 'date of completion', _style: { width: '20%'} },
                {
                key: 'show_details',
                label: '',
                _style: { width: '1%' },
                sorter: false,
                filter: false
                }
            ]
             

            
            return (
                
            
                <CDataTable
                overTableSlot= {
      
                    <CLink to="/pages/Tables/Add" className="btn btn-primary"> <CIcon name="cilPlus" height="48" alt="Logo"/>  Add task</CLink>
        }
                items={data}
                fields={fields}
                columnFilter
                tableFilter
                
                itemsPerPageSelect
                itemsPerPage={5}
                hover
                sorter
                // pagination
                scopedSlots = {{
                // 'status':
                //     (item)=>(
                //     <td>
                //         <CBadge color={getBadge(item.status)}>
                //         {item.status}
                //         </CBadge>
                //     </td>
                //     ),
                    

                'show_details':
                    (item, index)=>{
                    return (
                        <td className="py-2">
                         <CCol col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                            <CButton block variant="ghost"  onClick={() => { toggleDetails(index) }} color="primary"><CIcon name="cilPlus" height="12" alt="Logo"/> Other</CButton>
                            </CCol>
                        </td>
                        )
                    },
                'details':
                    (item, index)=>{
                        return (
                        <CCollapse show={details.includes(index)}>
                        <CCardBody>
                            <h4>
                            {item.username}
                            </h4>
                          
                            <CButton size="sm" color="info">
                           Modify
                            </CButton>
                            <CButton size="sm" color="danger"  onClick={()=>{RemouveButton(item.id)}} className="ml-1">
                            Delete
                            </CButton>
                        </CCardBody>
                        </CCollapse>
                    )
                    }
                }}
            />
            
            )
            }

export default ListTables
