import React from 'react';
import {createBox} from '@shopify/restyle';
import {createImageProgress} from 'react-native-image-progress';
import FastImage from 'react-native-fast-image';
import {Text} from './Text';
import {View} from './View';
import {Theme} from './theme';
const ImageProgress = createImageProgress(FastImage);
const SImage =
  createBox<Theme, React.ComponentProps<typeof ImageProgress>>(ImageProgress);
type Props = React.ComponentProps<typeof SImage>;
export const Image = React.memo((props: Props) => {
  const {source} = props;
  // return null with incorrect urls
  if (
    source &&
    typeof source.uri === 'string' &&
    !source.uri.split('http')[1]
  ) {
    return null;
  }
  return (
    <SImage
      indicator={ImageLoader}
      threshold={250}
      renderError={() => {
        return (
          <View justifyContent="center" alignItems="center">
            {/* <ErrorLoading /> */}
            <Text fontSize={10} pt="s">
              {/* TODO: placeholder loading */}
              {/* Error Loading media */}
            </Text>
          </View>
        );
      }}
      {...props}
      source={source}
      overflow="hidden"
    />
  );
});
const ImageLoader = () => null; // <ActivityIndicator color="#000" size="small" />;
