import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStack } from './app/config/CreateStack';
import { Provider } from '@ant-design/react-native';

const Stack = createAppContainer(createStack());

const App = () => <Provider><Stack/></Provider>;

export default App;
