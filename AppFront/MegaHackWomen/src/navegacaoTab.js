/* eslint-disable prettier/prettier */
import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';

import PageInicial from './pages/PageInicial';
import RedeBme from './pages/RedeBme';
import ChatMaria from './pages/ChatMaria';
import Notificacoes from './pages/Notificacoes';

export default function Navegacao() {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'notificacao', color: '#9d9fa1' },
      { key: 'rede', color: '#9d9fa1' },
      { key: 'inicial', color: '#9d9fa1' },
      { key: 'maria', color: '#9d9fa1' },
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


