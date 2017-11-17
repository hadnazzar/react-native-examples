import React from 'react';
import { Text, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import HTMLView from 'react-native-htmlview';


const ChapterDetail = ({ chapterData }) => {
    console.log(chapterData);
    const { chapter_number, id, name, text } = chapterData;
    const { headerContentStyle, headerTextStyle } = styles;

    return (
        <Card>
            <CardSection>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>Chapter Number: {chapter_number}</Text>
                </View>
            </CardSection>
            <HTMLView
                value={text}
                style={styles.textViewStyle}
            />
        </Card>
    )
}

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    headerTextStyle: {
        fontSize: 18
    },
    textViewStyle: {
        padding: 10
    }
}

export default ChapterDetail;