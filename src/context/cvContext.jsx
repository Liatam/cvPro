import { createContext, useContext, useState, useEffect } from "react";
import { database } from '../../firebaseConfig';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";


const cvContext = createContext();

const Provider = ({children})=>{
    const [auth, setAuth] = useState(getAuth());
    const collectionRef = collection(database, 'resumes');
    const [formData, setFormData] = useState({
        userId: "",
        //img????
        fullName: '',
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
  
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setFormData({ ...formData, userId: user?.uid })
            }
        });
    }, [])

    const updateNestedField = (e, nestedFieldName) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [nestedFieldName]: prevData[nestedFieldName].map((item, index) => (index === 0 ? { ...item, [name]: value } : item)),
        }));
        console.log(formData);
    };
    const updateFormData = (name, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const handleChange = (e) => {
        const { name, value, type, files } = e.target;

        if (type === 'file') {
            updateFormData(name, files[0]);
        } else {
            updateFormData(name, value);
        }
    };


    const handleSubmit = () => {

        addDoc(collectionRef, formData)
            .then(() => {
                console.log("Data added successfully");
            })
            .catch((err) => {
                console.error("Error adding data to Firestore:", err.message);
            });
    };

    const getDataByUserId = async () => {
        try {
            const userId = auth.currentUser.uid;
            const queryFind = userId === 'yblXFVxK6gfqP1lQjRnk56iKX653' ? query(collectionRef) : query(collectionRef, where('userId', '==', userId));
            const response = await getDocs(queryFind);
            return response.docs.map((doc) => doc.data());
        } catch (err) {
            console.log(err.message);
            return [];
        }
    }
    


  const shared = {formData, setFormData, handleChange, handleSubmit, updateNestedField, auth, getDataByUserId };
  return (
    <cvContext.Provider value={shared}>
        {children}
    </cvContext.Provider>
  )
}

export {Provider};
export default cvContext;
