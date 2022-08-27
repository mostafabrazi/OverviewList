import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ScrollViewProps,
  StyleSheet,
} from 'react-native';
import {View} from 'ui';
import {SCREEN_HEIGHT} from 'utils';

export const CustomAnimatedScrollView = ({
  children,
  ...props
}: ScrollViewProps) => (
  <KeyboardAvoidingView
    enabled
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={styles.container}
    keyboardVerticalOffset={Platform.OS === 'ios' ? 56 : 0}>
    <ScrollView
      ref={ref}
      showsVerticalScrollIndicator={false}
      keyboardDismissMode="interactive"
      scrollEventThrottle={16}
      {...props}>
      {children}
      <View height={SCREEN_HEIGHT / 2.5} />
    </ScrollView>
  </KeyboardAvoidingView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
