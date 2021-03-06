import React from "react-native";
import { Colors } from "values/colors";
import { Constants } from 'values/constants';
import { Fonts } from "values/fonts";
import { CheckBox } from "native-base";
import commonStyles from "styles/commonStyles";
const { Dimensions, Platform } = React;
const { StyleSheet } = React;
const window = Dimensions.get('window');

export default {
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: Colors.COLOR_BACKGROUND
    },
    header: {
        justifyContent: 'flex-start', alignItems: 'center', backgroundColor: Colors.COLOR_PRIMARY, paddingLeft: Constants.PADDING_X_LARGE, borderBottomWidth: 0
    }, title: {
        color: 'white'
    },
    input: {
        height: '100%',
        textAlignVertical: 'bottom',
        marginHorizontal: -5
    },
    item: {
        alignItems: 'center',
        marginVertical: Constants.PADDING_X_LARGE,
        paddingHorizontal: Constants.PADDING_LARGE,
    },
    name: {
        fontSize: Fonts.FONT_SIZE_X_MEDIUM,
        margin: 0
    },
    price: {
        fontSize: Fonts.FONT_SIZE_X_LARGE,
        color: Colors.COLOR_PRIMARY,
        margin: 0
    },
    checkBox: {
        backgroundColor: Colors.COLOR_WHITE,
        borderWidth: 0,
        padding: 0,
    },
    listPriceContainer: {
        flex: 1,
        paddingHorizontal: Constants.PADDING_X_LARGE,
        backgroundColor: Colors.COLOR_WHITE,
        padding: Constants.PADDING_X_LARGE * 2
    },
    iconNewConversation: {
        ...commonStyles.viewCenter,
        position: "absolute",
        bottom: Constants.MARGIN_X_LARGE,
        right: Constants.MARGIN_X_LARGE,
    },
    btnDeleteImage: {
        // padding: Constants.PADDING,
        position: 'absolute',
        borderRadius: Constants.BORDER_RADIUS / 2,
        top: - Constants.MARGIN * 2,
        right: - Constants.MARGIN * 2,
    },
    itemImageContainer: {
        marginVertical: Constants.PADDING_X_LARGE,
        marginHorizontal: Constants.MARGIN_LARGE,
        borderWidth: 1,
        borderColor: Colors.COLOR_GREY_LIGHT,
        borderRadius: Constants.CORNER_RADIUS / 2
    },
    dockSendMess: {
        justifyContent: 'center',
        borderTopLeftRadius: Constants.CORNER_RADIUS,
        borderTopRightRadius: Constants.CORNER_RADIUS,
        backgroundColor: Colors.COLOR_WHITE,
    },
    flatListSendImages: {
        height: 180 + Constants.MARGIN_XX_LARGE,
        borderTopLeftRadius: Constants.CORNER_RADIUS,
        borderTopRightRadius: Constants.CORNER_RADIUS,
        backgroundColor: Colors.COLOR_GREY
    }
};