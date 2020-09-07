/* eslint-disable prettier/prettier */
import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';

import PageInicial from './pages/PageInicial';
import RedeBme from './pages/RedeBme';
import ChatMaria from './pages/ChatMaria';
import Notificacoes from './pages/Notificacoes';

import saturno from './icones/saturn.png';
import sino from './icones/notification.png';
import casa from './icones/home-run.png';
import maria from './img/MARIA_-_BME_1.png';

export default function Navegacao() {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'notificacao', icon: sino, color: '#9d9fa1' },
      { key: 'rede', icon: saturno, color: '#9d9fa1' },
      { key: 'inicial', icon: casa, color: '#9d9fa1' },
      { key: 'maria', icon: maria, color: '#9d9fa1' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
      notificacao : Notificacoes,
      rede : RedeBme,
      inicial : PageInicial,
      maria : ChatMaria,
    });

    return (
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    );
};


