    import { loginService, signupService } from "../services/AuthService";
    import { useNavigate } from 'react-router-dom';
import { fetchPostService } from "../services/BlogService";

    const { createContext, useContext, useState, useReducer, useEffect } = require("react");


    const UserContext=createContext();

    export const UserProvider=({children})=>{

        const [isLogin,setIslogin]=useState(false);
        const navigate=useNavigate()

        const [state,dispatch]=useReducer(userReducer,{
            userId:"",
            userDetails:{},
            userBlogs:[],
            userFeed:[]
        })


        const userLogin=async(email,password)=>{
            const res=await loginService(email,password);
            if(res){
                setIslogin(true);
                dispatch({type:'setUserDetails',payload:res})
                if(res.role==='User'){
                    navigate('/user');
                }
            }
        }
        const userSignup=async(firstName,lastname,email,password,designation,contact,gender)=>{
            const res=await signupService(firstName,lastname,email,password,designation,contact,gender);
            if(res){
                setIslogin(true);
                dispatch({type:'setUserDetails',payload:res.user})
                if(res?.user.role==='User'){
                    navigate('/user');
                }
            }
        }

       

        const userLogout=()=>{
            setIslogin(false);
            dispatch({type:'logoutUser'})
            navigate("/")

        }


        const fetchAllPost=async()=>{
            const res=await fetchPostService();
            dispatch({type:"setUserFeed",payload:res})
        }

        useEffect(()=>{
            fetchAllPost()
        },[])


        return <UserContext.Provider value={{state,userLogin,userLogout,userSignup}}>
            {children}
        </UserContext.Provider>
    }

    export const useUserContext=()=>useContext(UserContext);

    const userReducer=(state,action)=>{
        const {type,payload}=action
        switch(type){
            case "setUserDetails":
                return {
                    ...state,userId:payload.userID,userDetails:{...payload},userBlogs:[]
                }
            case "logoutUser":
                return {
                    ...state,userId:"",userDetails:{},userBlogs:[]
                }
            case 'setUserFeed':
                return {
                    ...state,userFeed:payload
                }
            default:
                return state
        }

    }