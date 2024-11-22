import React from 'react';
import {View, Modal} from 'react-native';
import WebView from 'react-native-webview';
export default function PayPal({isShow, setIsShow}) {
  const handleResponse = data => {
    console.log(data.title, 'tiitle');
    if (data.title === 'success') {
      rechargeMoney();
    } else if (data.title === 'cancel') {
      setIsShow(false);
      Alert.alert('Thông báo', 'Bạn đã huỷ nạp tiền');
    } else {
      return;
    }
  };

  return (
    <View>
      <Modal visible={isShow} onRequestClose={() => setIsShow(false)}>
        <WebView
          source={{uri: 'https://pay-pal-redirect.herokuapp.com/paypal'}}
          onNavigationStateChange={data => handleResponse(data)}
          injectedJavaScript={`document.f1.submit()`}
        />
      </Modal>
    </View>
  );
}
