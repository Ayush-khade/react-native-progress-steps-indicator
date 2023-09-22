import React, { useEffect, useRef, useState } from "react";
import { ScrollView, Text, View, FlatList } from 'react-native';

type Props = {
    activeStep: number;
    labels?: (string | number)[];
    customStyles?: {
        stepIndicatorSize?: number;
        currentStepIndicatorSize?: number;
        activeStepBackgroundColor?: string;
        inactiveStepBackgroundColor?: string;
        separatorStrokeWidth?: number;
        finishedStepBackgroundColor?: string;
        unfinishedStepBackgroundColor?: string;
        stepIndicatorLabelFontSize?: number;
        stepIndicatorLabelColor?: string;
        lableColor?: string;
        labelSize?: number;
        currentStepLabelColor?: string;
    }
}

const RNStepsIndicator = (props: Props) => {

    const [activeScreen, setActiveScreen] = useState(props?.activeStep ? props.activeStep : 0);
    const [titles, setTitles] = useState(props?.labels ? props?.labels : ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"])
    const [themeColor, setThemeColor] = useState("#008b91")
    const scrollRef = useRef<ScrollView>(null);

    let stepIndicatorSize: number = props?.customStyles?.stepIndicatorSize ? props?.customStyles?.stepIndicatorSize : 35;
    let currentStepIndicatorSize: number = props?.customStyles?.currentStepIndicatorSize ? props?.customStyles?.currentStepIndicatorSize : stepIndicatorSize;
    let separatorStrokeWidth: number = props?.customStyles?.separatorStrokeWidth ? props?.customStyles?.separatorStrokeWidth : 2;

    let activeStepBackgroundColor: string = props?.customStyles?.activeStepBackgroundColor ? props?.customStyles?.activeStepBackgroundColor : themeColor;
    let inactiveStepBackgroundColor: string = props?.customStyles?.inactiveStepBackgroundColor ? props?.customStyles?.inactiveStepBackgroundColor : "#474747";

    let finishedStepBackgroundColor: string = props?.customStyles?.finishedStepBackgroundColor ? props?.customStyles?.finishedStepBackgroundColor : activeStepBackgroundColor;
    let unfinishedStepBackgroundColor: string = props?.customStyles?.unfinishedStepBackgroundColor ? props?.customStyles?.unfinishedStepBackgroundColor : inactiveStepBackgroundColor;

    let stepIndicatorLabelFontSize: number = props?.customStyles?.stepIndicatorLabelFontSize ? props?.customStyles?.stepIndicatorLabelFontSize : 15;
    let stepIndicatorLabelColor: string = props?.customStyles?.stepIndicatorLabelColor ? props?.customStyles?.stepIndicatorLabelColor : "#ffffff";

    let lableColor: string = props?.customStyles?.lableColor ? props?.customStyles?.lableColor : "#a7a7a7";
    let currentStepLabelColor: string = props?.customStyles?.currentStepLabelColor ? props?.customStyles?.currentStepLabelColor : lableColor;
    let labelSize: number = props?.customStyles?.labelSize ? props?.customStyles?.labelSize : 12;
    useEffect(() => {
        scrollRef.current?.scrollTo({ x: (activeScreen - 1) * 60, animated: true });
        setActiveScreen(props?.activeStep)
    }, [activeScreen, props.activeStep])

    const RenderItem = () => {
        return (<View style={{ marginTop: 20 }}>
            {titles?.length >= 7 ?
                <ScrollView style={{ marginHorizontal: 12, flexDirection: "row", backgroundColor: "#00000000", minHeight: 65 }} horizontal ref={scrollRef}>
                    {titles.map((data: any, index: any) => {
                        return (
                            <View key={Math.random()} style={{ flex: 1, flexDirection: "column", marginVertical: 10 }}>
                                <View key={Math.random()} style={{ flex: 1, flexDirection: "row", minWidth: 60, justifyContent: "center", alignItems: "center" }}>
                                    {index == 0 ?
                                        <View key={Math.random()} style={{
                                            height: separatorStrokeWidth,
                                            backgroundColor: "#47474700", flex: 1
                                        }} /> : <View key={Math.random()} style={{
                                            height: separatorStrokeWidth,
                                            backgroundColor: (activeScreen - 1) >= index ? finishedStepBackgroundColor : (activeScreen - 2) == index ? activeStepBackgroundColor : unfinishedStepBackgroundColor, flex: 1,
                                        }} />}
                                    <View key={Math.random()}
                                        style={{
                                            // height: stepIndicatorSize,
                                            // minWidth: stepIndicatorSize,
                                            // maxWidth: stepIndicatorSize,
                                            height: (activeScreen - 2) >= index ? stepIndicatorSize : (activeScreen - 1) == index ? currentStepIndicatorSize : stepIndicatorSize,
                                            minWidth: (activeScreen - 2) >= index ? stepIndicatorSize : (activeScreen - 1) == index ? currentStepIndicatorSize : stepIndicatorSize,
                                            maxWidth: (activeScreen - 2) >= index ? stepIndicatorSize : (activeScreen - 1) == index ? currentStepIndicatorSize : stepIndicatorSize,
                                            borderRadius: (activeScreen - 2) >= index ? stepIndicatorSize : (activeScreen - 1) == index ? currentStepIndicatorSize : stepIndicatorSize,
                                            backgroundColor: (activeScreen - 2) >= index ? finishedStepBackgroundColor : (activeScreen - 1) == index ? activeStepBackgroundColor : unfinishedStepBackgroundColor,
                                            justifyContent: "center", alignSelf: "center", flex: 1
                                        }}>
                                        <Text key={Math.random()} style={{ color: stepIndicatorLabelColor, fontSize: stepIndicatorLabelFontSize, alignSelf: "center", fontWeight: "bold" }}>{(activeScreen - 2) >= index ? index + 1 : index + 1}</Text>
                                    </View>
                                    {index == (titles.length - 1) ? <View key={Math.random()} style={{
                                        height: separatorStrokeWidth,
                                        backgroundColor: "#47474700", flex: 1,
                                    }} /> :
                                        <View key={Math.random()} style={{
                                            height: separatorStrokeWidth,
                                            backgroundColor: (activeScreen - 2) >= index ? finishedStepBackgroundColor : (activeScreen - 2) == index ? activeStepBackgroundColor : unfinishedStepBackgroundColor, flex: 1,
                                        }} />}

                                </View>
                                <View key={Math.random()} style={{ flex: 1, minWidth: 60 }}>
                                    <Text style={{ color: (activeScreen - 2) >= index ? lableColor : (activeScreen - 1) == index ? currentStepLabelColor : lableColor, textAlign: "center", fontSize: labelSize, margin: 5 }}>{data}</Text>
                                </View>
                            </View>
                        )
                    })}
                </ScrollView> :
                <View key={Math.random()} style={{ paddingHorizontal: 12, flexDirection: "row", backgroundColor: "#00000000", minHeight: 65, height: stepIndicatorSize + labelSize * 6 }}>
                    {titles.map((data: any, index: any) => {
                        return (
                            <View key={Math.random()} style={{ flex: 1, flexDirection: "column" }}>
                                <View key={Math.random()} style={{ flexDirection: "row", minWidth: 60, justifyContent: "center", alignItems: "center", height: stepIndicatorSize, marginTop: stepIndicatorSize / 3 }}>
                                    {index == 0 ?
                                        <View key={Math.random()} style={{
                                            height: separatorStrokeWidth,
                                            backgroundColor: "#47474700", flex: 1
                                        }} /> : <View key={Math.random()} style={{
                                            height: separatorStrokeWidth,
                                            backgroundColor: (activeScreen - 1) >= index ? finishedStepBackgroundColor : (activeScreen - 2) == index ? activeStepBackgroundColor : unfinishedStepBackgroundColor, flex: 1,
                                        }} />}
                                    <View key={Math.random()}
                                        style={{
                                            // height: stepIndicatorSize,
                                            // minWidth: stepIndicatorSize,
                                            // maxWidth: stepIndicatorSize,
                                            height: (activeScreen - 2) >= index ? stepIndicatorSize : (activeScreen - 1) == index ? currentStepIndicatorSize : stepIndicatorSize,
                                            minWidth: (activeScreen - 2) >= index ? stepIndicatorSize : (activeScreen - 1) == index ? currentStepIndicatorSize : stepIndicatorSize,
                                            maxWidth: (activeScreen - 2) >= index ? stepIndicatorSize : (activeScreen - 1) == index ? currentStepIndicatorSize : stepIndicatorSize,
                                            borderRadius: (activeScreen - 2) >= index ? stepIndicatorSize : (activeScreen - 1) == index ? currentStepIndicatorSize : stepIndicatorSize,
                                            backgroundColor: (activeScreen - 2) >= index ? finishedStepBackgroundColor : (activeScreen - 1) == index ? activeStepBackgroundColor : unfinishedStepBackgroundColor,
                                            justifyContent: "center", alignSelf: "center", flex: 1
                                        }}>
                                        <Text key={Math.random()} style={{ color: stepIndicatorLabelColor, fontSize: stepIndicatorLabelFontSize, alignSelf: "center", fontWeight: "bold" }}>{(activeScreen - 2) >= index ? index + 1 : index + 1}</Text>
                                    </View>
                                    {index == (titles.length - 1) ? <View key={Math.random()} style={{
                                        height: separatorStrokeWidth,
                                        backgroundColor: "#47474700", flex: 1,
                                    }} /> :
                                        <View key={Math.random()} style={{
                                            height: separatorStrokeWidth,
                                            backgroundColor: (activeScreen - 2) >= index ? finishedStepBackgroundColor : (activeScreen - 2) == index ? activeStepBackgroundColor : unfinishedStepBackgroundColor, flex: 1,
                                        }} />}

                                </View>
                                <View key={Math.random()} style={{ flex: 1, minWidth: 60 }}>
                                    <Text style={{ color: (activeScreen - 2) >= index ? lableColor : (activeScreen - 1) == index ? currentStepLabelColor : lableColor, textAlign: "center", fontSize: labelSize, margin: 3, textAlignVertical: "top" }}>{data}</Text>
                                </View>
                            </View>
                        )
                    })}
                </View>}
        </View>
        )
    }

    return (
        <RenderItem />
    )
}

export default RNStepsIndicator;