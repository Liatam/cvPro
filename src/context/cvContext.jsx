import { createContext,  useState, useReducer } from "react";



const cvContext = createContext()

const Provider = ({children})=>{
    
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        workExperience: [
            {
                companyName: '',
                timeFrame: {
                    from: '',
                    to: '',
                }
            }
        ],
        education: [
            {
                learnSubject: '',
                timeFrame: {
                    from:'',
                    to:'',
                }
            }
        ]
    })
  

  const shared = {data, setData }
  return (
    <cvContext.Provider value={shared}>
        {children}
    </cvContext.Provider>
  )
}

export {Provider};
export default cvContext;
