/* eslint-disable prettier/prettier */
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import Pcadastro from './pages/Pcadastro';
import Cadastro from './pages/Cadastro';
import PageInicial from './pages/PageInicial';

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        Pcadastro,
        Cadastro,
        PageInicial,
    })
);

export default Routes;
