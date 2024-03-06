//variables globales
import { create } from 'zustand';

//hook para gestionar datos de usuario
export const useUserData = create((set) => ({
  userId: '',
  setUserId: (id) => set({ userId: id }),
  clearUserId: () => set({ userId: '' }),
}));

export const useAuthStore = create((set) =>({
  token:null,
  setToken: (newToken) => set({token:newToken}),
  clearToken:() => set({token: null}),
}));



//Nombre del servidor y de las urls
export const urlServerStore = create(() => ({
  localhost: 'http://localhost:8080/',
  login: 'api/auth/login',
}));

//definicion de rutas
export const useRoutes = create(() =>{
  const dynamicParts = {
    inicio: '/',
    principal:'inscripcion_web/',
    postulacion: 'postulacion/',
    configuracion:'configuracion/',
    crearPlantilla: 'crear_plantilla/'
  };
  const initialState ={
    inicio: dynamicParts.inicio,
    principal: dynamicParts.inicio + dynamicParts.principal,
    postulacion: dynamicParts.inicio + dynamicParts.principal +
      dynamicParts.postulacion,
    configuracion: dynamicParts.inicio + dynamicParts.principal +
    dynamicParts.configuracion,
    crearPlantilla: dynamicParts.inicio + dynamicParts.principal +
    dynamicParts.configuracion + dynamicParts.crearPlantilla
  };
  return {
    ...initialState,
    dynamicParts
  };
})








