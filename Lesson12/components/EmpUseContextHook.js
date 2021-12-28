import React,{useContext} from 'react'

const EmpContext=React.createContext();

export default function EmpUseContextHook() {
    const empToContext={empNo:1, firstName:"Ahmet"};
    return (
        <div>
        //Input text 2
        <EmpContext.Provider value={empToContext}>
            <Display/>
        </EmpContext.Provider>
        
        </div>
    )
}

function Display(){
    const emp=useContext(EmpContext);
    return(
        <div>
            Welcome {emp.empNo} {emp.firstName}
        </div>

    )

}
