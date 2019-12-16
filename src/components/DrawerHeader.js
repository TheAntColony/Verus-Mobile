import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  StatusBar, 
  TouchableOpacity, 
  Platform 
} from 'react-native';
import Colors from '../globals/colors';

const LOGO_DIR = require('../images/customIcons/Verus.png');

const DrawerHeader = ({ navigateToScreen }) => (
	<TouchableOpacity onPress={() => navigateToScreen('Home')}>
		<View
			style={{
				flexDirection: 'row',
				backgroundColor: Colors.linkButtonColor,
				paddingLeft: '5%',
				paddingBottom : '15%',
				paddingTop: Platform.OS === 'ios' ? 35 : 25,
				alignItems: 'flex-end',
			}}
		>
			<Image
				source={LOGO_DIR}
				style={{width: '50%', height: 100, overflow: 'hidden', resizeMode: 'contain' }}
			/>
		</View>
	</TouchableOpacity>
);

export default DrawerHeader;
