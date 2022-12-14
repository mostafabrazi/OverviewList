# Items list client mobile app for SWAPI (star wars api)

- Design based on <a href="https://dribbble.com/shots/18314501-DroidDepot-App">`DroidDepot`</a> app, Check Dribbble <a href="https://dribbble.com/shots/18314501-DroidDepot-App">here</a>
- API is based on <a href="https://github.com/graphql/swapi-graphql">graphql/swapi-graphql</a> repository, check GrapgQl playground <a href="https://graphql.github.io/swapi-graphql">here</a>
    - PS. Link https://api-euwest.graphcms.com/v1/ck5wca13qc9ux01fgaidt12m4/master mentioned in the pdf is **no more working**.

<p align="center">
<img src="https://user-images.githubusercontent.com/16275632/187164573-0765f1c6-8851-4a1d-ae06-42fd7c297b24.png" width=30% height=30%>
<img src="https://user-images.githubusercontent.com/16275632/187164512-2061b926-7a9c-4aa9-a0cc-55a8c23be3a8.png" width=30% height=30%>
<img src="https://user-images.githubusercontent.com/16275632/187164659-9a1887d5-81e3-4447-9541-38092b9f3882.png" width=30% height=30%>
</p>

### To install the app please follow the steps below:


1- Clone this directory using this command in you favorite folder on your machine

```
cd [YOUR_FAVORITE_FOLDER]
git clone git@github.com:mostafabrazi/OverviewList.git
```

2- Change directory to `OverviewList`

```
cd [YOUR_FAVORITE_FOLDER]/OverviewList
```

2- Install node packages

```
yarn
```

3- Start metro server 

```
yarn start
```
    Clearing cache `yarn start -reset--cache`

4- Install pods for iOS app

```
pod install
```

5- Run iOS app

```
npx react-native run-ios
```

or Android app

```
npx react-native run-android
```

Note: For android app, add these lines to `android/gradle.properties` if you are using Java `java version "17.0.1" 2021-10-19 LTS`

```
org.gradle.jvmargs=-Xmx4096m -XX:MaxPermSize=4096m -XX:+HeapDumpOnOutOfMemoryError
org.gradle.jvmargs=-Xmx1536M --add-exports=java.base/sun.nio.ch=ALL-UNNAMED --add-opens=java.base/java.lang=ALL-UNNAMED --add-opens=java.base/java.lang.reflect=ALL-UNNAMED --add-opens=java.base/java.io=ALL-UNNAMED --add-exports=jdk.unsupported/sun.misc=ALL-UNNAMED
```

Here we go, our app is up and running!
