import { auth } from '../Plugins/firebase'
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from '@firebase/auth'
import { useRef, useState } from 'react';


export default function loginPage(){
    //use ref
    const email = useRef(null);
    const passtowd = useRef(null);
    const [islogin, setisLoginin] = useState(false)
    const [stateSing] = useState(false)
    const [user, setUser] = useState({})
    onAuthStateChanged(auth, (user) => {
        if(user){
            setisLoginin(true)
            setUser(auth)
        }else{
            console.log('Inicie sesion');
            console.log(stateSing)
        }
    })
    let singout = (event) => {
        const auth = getAuth();
        event.preventDefault(); //bloque el comportamiento de la pagina
        if(!stateSing){
            console.log('entro')
            signOut(auth).then(()=> {
                console.alert('SE CERRO SESION')
                stateSing(true)
            }).catch((error) => {

            })
        }
    }
    let handleSubmit = async (event) => {
        event.preventDefault(); //bloque el comportamiento de la pagina
        try {
            const resul = await signInWithEmailAndPassword(auth, email.current.value, passtowd.current.value)
        } catch (err) {
            
        }
    }
    return(
        islogin ? (
            <div>
                <form onSubmit={singout}>
                    <h1>Bienvenido {user.email}</h1>
                    <button type="submit">exit</button>
                </form>
            </div>
        ) 
        : ( <div>
                <h1>Iniciar sesion</h1>
                <form onSubmit={handleSubmit} >
                <label>Correo</label>
                <input 
                type="email" 
                ref = {email} 
                /> 
                <label>Password</label>
                <input 
                type="password" 
                ref={passtowd} />
                <button type="submit">Iniciar</button>
                </form>
                </div>)
    )
}