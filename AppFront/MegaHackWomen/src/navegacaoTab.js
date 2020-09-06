/* eslint-disable prettier/prettier */
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import PageInicial from './pages/PageInicial';
import RedeBme from './pages/RedeBme';
import ChatMaria from './pages/ChatMaria';
import Notificacoes from './pages/Notificacoes';

const TabRoute = createAppContainer(
    createBottomTabNavigator({
        Sino : Notificacoes,
        Rede : RedeBme,
        Inicial : PageInicial,
        Maria : ChatMaria,
    })
);

export default TabRoute;

