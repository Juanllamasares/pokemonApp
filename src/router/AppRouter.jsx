import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { useCheckAuth } from '../hooks/useCheckAuth';
import { PokemonsRoutes } from '../pokemons/pokeRoutes/PokemonsRoutes';

export const AppRouter = () => {
  const { status } = useCheckAuth();
  return (
    <Routes>
        {
          status === 'authenticated'
          ? <Route path='/*' element={<PokemonsRoutes />} />
          : <Route path='/auth/*' element={<AuthRoutes />} />
        } 

        <Route path='/*' element={<Navigate to='/auth/login' />} />      

    </Routes>  
  )
}
