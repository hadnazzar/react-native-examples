import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import ChapterDetail from './ChapterDetail'

class Chapter extends Component {
    state = {
        data: []
    };
    componentWillMount() {
        fetch('https://cap_america.inkitt.de/1/stories/106766/chapters/1')
            .then((response) => response.json())
            .then((responseJSON) => {
                console.log(responseJSON);
                this.setState({
                    data: responseJSON.response
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    renderChapter() {
        console.log("renderChapter");
        console.log(this.state.data);
        return (
            <View>
                <ChapterDetail key={this.state.data.chapter_number} chapterData={this.state.data} />
            </View>
        );
    }

    render() {
        return (
            <ScrollView>
                {this.renderChapter()}
            </ScrollView>
        )
    }
}

export default Chapter;