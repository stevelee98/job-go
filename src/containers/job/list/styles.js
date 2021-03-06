import React from "react-native";
import { Colors } from "values/colors";
import { Constants } from 'values/constants'
import commonStyles from "styles/commonStyles";
import { Fonts } from "values/fonts";

const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get('window').width;
const { StyleSheet } = React;
const SIZE_ICON = 24;

export default styles = {
    container: {
        // width: null,
        // height: null,
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'stretch',
        backgroundColor: Colors.COLOR_WHITE
    },
    textMenu: {
        ...commonStyles.textBold,
        flex: 1,
        fontSize: Fonts.FONT_SIZE_XX_SMALL,
    },
    iconMenu: {
        margin: Constants.MARGIN,
        backgroundColor: Colors.COLOR_RED,
        width: SIZE_ICON,
        height: SIZE_ICON,
        borderRadius: SIZE_ICON / 2
    },
    checkBox: {
        backgroundColor: Colors.COLOR_WHITE,
        borderWidth: 0,
        padding: 0
    },
    floatingButton: {
        ...commonStyles.shadowOffset,
        position: 'absolute',
        right: Constants.MARGIN_X_LARGE,
        bottom: Constants.MARGIN_X_LARGE,
        backgroundColor: Colors.COLOR_PRIMARY,
        borderRadius: Constants.BORDER_RADIUS,
        padding: Constants.PADDING_X_LARGE
    },
    boxTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: Constants.PADDING_LARGE
    },
    title: {
        ...commonStyles.text
    },
    checkBox: {
        ...commonStyles.viewCenter,
        width: 18,
        height: 18,
        borderWidth: 1,
        borderRadius: 9,
        borderColor: Colors.COLOR_PRIMARY,
        marginRight: Constants.MARGIN_X_LARGE
    },
    containerItem: {
        flex: 1,
        backgroundColor: Colors.COLOR_WHITE,
        paddingVertical: Constants.PADDING_LARGE,
        flexDirection: 'row',
    },
    image: {
        borderRadius: Constants.CORNER_RADIUS
    },
    address: {
        ...commonStyles.text,
        marginHorizontal: Constants.MARGIN_LARGE,
        fontSize: Fonts.FONT_SIZE_MEDIUM,
        color: Colors.COLOR_DRK_GREY,
        margin: 0, padding: 0
    },
    titleItem: {
        ...commonStyles.text,
        marginHorizontal: Constants.MARGIN_LARGE,
        fontSize: Fonts.FONT_SIZE_XX_MEDIUM,
        margin: 2, padding: 0
    },
    salary: {
        ...commonStyles.text,
        marginHorizontal: Constants.MARGIN_LARGE,
        fontSize: Fonts.FONT_SIZE_X_MEDIUM,
        color: Colors.COLOR_TEXT_PRIMARY,
        margin: 2, padding: 0
    },
    viewUser: {
        backgroundColor: Colors.COLOR_BACKGROUND,
        paddingHorizontal: Constants.PADDING_X_LARGE,
        borderRadius: Constants.CORNER_RADIUS * 4,
        marginHorizontal: Constants.MARGIN_LARGE,
        maxWidth: Constants.MAX_WIDTH * 0.7,
        paddingVertical: Constants.PADDING, flex: 1,
        marginBottom: Constants.MARGIN_LARGE
    },
    btnSave: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItem: 'center'
    }
}