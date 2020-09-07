/* eslint-disable prettier/prettier */
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import Pcadastro from './pages/Pcadastro';
import Cadastro from './pages/Cadastro';
import Navegacao from './navegacaoTab';
import PageInicial from './pages/PageInicial';
import Menu from './pages/Menu';

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        Pcadastro,
        Cadastro,
        Navegacao,
        PageInicial,
        Menu,
    })
);

export default Routes;
