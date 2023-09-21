import React, { useEffect, useRef, useState } from "react";
import { ScrollView, Text, View } from 'react-native';

const ProgressBar = (props: any) => {
    const [activeScreen, setActiveScreen] = useState(props?.activeScreen?props.activeScreen:0);
    const [themeColor,setThemeColor]=useState("#008b91")
    const scrollRef = useRef<ScrollView>(null);
    const titles=["Upload & Verify","Select I/O Fields","Set Training Parameters","Train Model","Save & Finish"];

    useEffect(()=>{
        scrollRef.current?.scrollTo({ x: (activeScreen-1) * 60, animated: true });
        setActiveScreen(props?.activeScreen)
    },[activeScreen,props.activeScreen])
    
    return (<>
        {titles.length >= 7 ?
            <ScrollView style={{ padding: 12, flexDirection: "row", backgroundColor: "#000000", height: "14%", maxHeight: "14%", borderBottomWidth: 2, borderBottomColor: themeColor }} horizontal ref={scrollRef}>
            {titles.map((data: any, index: any) => {
                return (
                    <View style={{ flex: 1, flexDirection: "column" }}>
                        <View style={{ flex: 1, flexDirection: "row", minWidth: 60, justifyContent: "center", alignItems: "center" }}>
                            {index == 0 ?
                                <View style={{
                                    height: 2,
                                    backgroundColor: "#47474700", flex: 1
                                }} /> : <View style={{
                                    height: 2,
                                    backgroundColor: activeScreen>index ? themeColor : "#474747", flex: 1,
                                }} />}
                            <View
                                style={{
                                    height: 35,
                                    minWidth: 30,
                                    maxWidth: 35,
                                    borderRadius: 35,
                                    backgroundColor: activeScreen>index ? themeColor : "#474747",
                                    justifyContent: "center", alignSelf: "center", flex: 1
                                }}>
                                <Text style={{ color: "#ffffff", fontSize: 16, alignSelf: "center", fontWeight: "bold" }}>{index+1}</Text>
                            </View>
                            {index == (titles.length - 1) ? <View style={{
                                height: 2,
                                backgroundColor: "#47474700", flex: 1,
                            }} /> :
                                <View style={{
                                    height: 2,
                                    backgroundColor: activeScreen-1>index ? themeColor : "#474747", flex: 1,
                                }} />}

                        </View>
                        <View style={{ flex: 1, minWidth: 60 }}>
                            <Text style={{ color: "#a7a7a7", textAlign: "center", fontSize: 11, margin: 5 }}>{data}</Text>
                        </View>
                    </View>
                )
            })}
        </ScrollView> :
            <View style={{ padding: 12, flexDirection: "row", backgroundColor: "#000000", height: "14%", minHeight: 65, borderBottomWidth: 2, borderBottomColor: themeColor}}>
                {titles.map((data: any, index: any) => {
                    return (
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <View style={{ flex: 1, flexDirection: "row", minWidth: 60, justifyContent: "center", alignItems: "center" }}>
                                {index == 0 ?
                                    <View style={{
                                        height: 2,
                                        backgroundColor: "#47474700", flex: 1
                                    }} /> : <View style={{
                                        height: 2,
                                        backgroundColor: activeScreen>index ? themeColor : "#474747", flex: 1,
                                    }} />}
                                <View
                                    style={{
                                        height: 35,
                                        minWidth: 30,
                                        maxWidth: 35,
                                        borderRadius: 35,
                                        backgroundColor: activeScreen>index ? themeColor : "#474747",
                                        justifyContent: "center", alignSelf: "center", flex: 1
                                    }}>
                                    <Text style={{ color: "#ffffff", fontSize: 16, alignSelf: "center", fontWeight: "bold" }}>{(activeScreen-2)>=index?<></>:index+1}</Text>
                                </View>
                                {index == (titles.length - 1) ? <View style={{
                                    height: 2,
                                    backgroundColor: "#47474700", flex: 1,
                                }} /> :
                                    <View style={{
                                        height: 2,
                                        backgroundColor: activeScreen-1>index ? themeColor : "#474747", flex: 1,
                                    }} />}

                            </View>
                            <View style={{ flex: 1, minWidth: 60 }}>
                                <Text style={{ color: "#a7a7a7", textAlign: "center", fontSize: 11, margin: 5 }}>{data}</Text>
                            </View>
                        </View>
                    )
                })}
            </View>}

    </>
    )
}

export default ProgressBar