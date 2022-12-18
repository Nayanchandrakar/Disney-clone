import React ,{ createContext , useContext , useEffect , useState} from 'react'
import { db } from "./firebase.config";
import { collection, onSnapshot } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import axios from 'axios';
import { async } from '@firebase/util';

const AppContext = createContext();

const provider = new GoogleAuthProvider();
const auth = getAuth();


const AppProvider = ({ children }) => {
  const [myuser, setuser] = useState(null)
  const [logicnav, setlogicnav] = useState(false)

  let login = () => {

    signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      setuser(result.user.providerData[0])
      setlogicnav(true)
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
  }

const moviedata = collection(db, "disneyclone");
const [getmovies, setmoviesdata] = useState([{}])
const [movieslice, setmovieslice] = useState([{}])


const options = {
  method: 'GET',
  url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cardbacks' ,
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_REACT_RAPID_API_KEY_MAIN,
    'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
  }
};


const MovieSlice = async() => {
let moviedata = await axios(options).then(res => setmovieslice(res.data))
}

  useEffect(() => {

    onSnapshot(moviedata , (snapshot) => {
      setmoviesdata(snapshot.docs.map((movies) => {
        return{ id: movies.id , ...movies.data() }
      }))
    })

  },[])

  return (<AppContext.Provider value={{getmovies , login ,myuser , setuser ,logicnav ,setlogicnav , auth , movieslice , MovieSlice}}>{children}</AppContext.Provider>)
};


const useGlobalContext = () => {
   return useContext(AppContext);
}

export { AppContext , AppProvider , useGlobalContext };
