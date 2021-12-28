import React,{useContext,useState} from 'react'

const EmpContext=React.createContext();
const JobContext=React.createContext();

export default function EmpUseMultipleContextHook() {
    const empToContext={empNo:1, firstName:"Ahmet"};
    const empJobs=[{empNo:1, job:"IT"},{empNo:1, job:"MGR"},{empNo:2, job:"PROG"}];
    //define a context for jobs and display a chosen employee's jobs 
    const initialState={empNo:""}
    const [state,addText] =useState(initialState);
    return (
        <div>
        <input type="text" value={state.empNo}  
        onChange={(e)=>addText({...state,empNo:e.target.value})}></input>
        <EmpContext.Provider value={state}>
            <JobContext.Provider value={empJobs}>
            <Display/>
            </JobContext.Provider>
        </EmpContext.Provider>
        
        </div>
    )
}

function Display(){
    const emp=useContext(EmpContext);
    const jobs=useContext(JobContext);
    const empJobs=jobs.filter(e=>e.empNo==emp.empNo)
    return(
        <div>
            Welcome {emp.empNo}  {emp.firstName} 
            <h2>    
                {empJobs.map(function(item,index){
                    return <li key={index}> {item.job} </li>;
                })}
            </h2>    
        </div>
    )

}
