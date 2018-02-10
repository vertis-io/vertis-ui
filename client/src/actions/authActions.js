import axios from 'axios';
import { push } from 'react-router-redux';

const REST_SERVER = process.env.REST_SERVER;
export const checkAuth = () => (dispatch) => {
  console.log('running');
  let authorization = localStorage.getItem('token')
  console.log('token is', authorization);
  if(authorization){
    axios({
      method: 'GET',
      headers: { authorization },
      url: `${REST_SERVER}/api/ping`
      })
      .then(()=>{
        dispatch(push('/home'));
        dispatch({type: 'LOGIN'})
      })
      .catch(()=> {
        localStorage.removeItem('token');
      })
  }
}