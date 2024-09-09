import { BrowserRouter, Routes , Route, Navigate } from 'react-router-dom'
import Home from "./home"
import AppLayout from './Layout';
import Counter from './counter';
import TodoApp from './Todo';
import Contact from './contact';
import AppNotfound from './notfound';
import SignUpPage from './signup';
import LoginPage from './login';
import ProfilePage from './profile';
import { useEffect, useState } from 'react';
import { auth, onAuthStateChanged } from '../component/firebase/firebase';
import { Spin } from 'antd';

function Rounter(){
    const [user, setUser] =useState(false)
    const [loader, setLoader] =useState(true)
    useEffect(()=>{
       onAuthStateChanged(auth, (user) => {
             if(user){
                setUser(true)
             } else{
                setUser(false)
             }
             setLoader(false)
       })
    },[])
    return(
        <>
        {loader
    ?<div style={{ padding: 200 }}>
       <Spin tip="Loading" size="large">
            <div  className="content"/>
      </Spin>
    </div>
     :
          <BrowserRouter >
          <Routes>
            <Route path='/home' element={
            <AppLayout>
                <Home />
            </AppLayout>} />
            <Route path='/counter' element={
            <AppLayout>
                <Counter />
            </AppLayout>} />
            <Route path='/Todo' element={
            <AppLayout>
                <TodoApp />
            </AppLayout>} />
            <Route path='/contact' element={
            <AppLayout>
                <Contact />
            </AppLayout>} />
            <Route path='/signup' element={
               user ? <Navigate to={"/profile"}/> : <SignUpPage />
            } />
            <Route path='/login' element={  
               user ? <Navigate to={"/profile"}/> : <LoginPage />
            } />
            <Route path='/profile' element={ 
               user ? <ProfilePage /> : <Navigate to={"/"}/>
             } />
            <Route path='*' element={
            <AppLayout>
                <AppNotfound />
            </AppLayout>} />
          </Routes>
          </BrowserRouter>
         }
        </>
        
    )
}
export default Rounter;