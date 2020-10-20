import Utils from "./utils";
import accent from 'remove-accents';

export default class StringUtil {

    /**
     * Capital first letter
     * @param {*} string 
     */
    static capitalizeFirstLetter = (string = '') => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    /**
     * Check is null or empty
     * @param {*} string 
     */
    static isNullOrEmpty = (string = '') => {
        return string == ''
    }

    /**
     * string
     */
    static convertMoney = (string) => {
        return string;
    }

    static clearTagHTML = (string) => {
        const regex = /(<([^>]+)>)/ig;
        const result = string.replace(regex, '');
        return result;
    }

    static isParseMoney = (number) => {
        //return number=parseFloat(number.replace(/,/g,''));
        return number = number.replace(/\s?/g, ',').replace(/(\d{3})/g, '$1 ').trim()

    }

    static parseMoney = (number) => {
        let result = "";
        let temp = 0;
        for (let i = number.toString().length - 1; i >= 0; i = i - 1) {
            result = number.toString()[i] + result;
            temp++;
            if (temp === 3 && i != 0) {
                result = "," + result;
                temp = 0;
            }
        }
        return result;
    }

    /**
     * valid special character 
     */
    static validSpecialCharacter = (string) => {
        // return string.match(/[$&+,:;=?@#|<>.\-^*()%!]+/g);
        // return string.match(/[W_]/);
        return string.match(/[!#%^*(),?":{}|[<>/\\\]~_-]/);
    }

    /**
 * valid special character ( except '.')
 */
    static validSpecialCharacterForEmail = (string) => {
        // return string.match(/[$&+,:;=?@#|<>.\-^*()%!]+/g);
        // return string.match(/[W_]/);
        return string.match(/[!#$%^&*(),?":{}|[<>/\\\]~-]/);
    }


    /**
 * valid special character continue ( 2)
 */
    static validSpecialCharacter2 = (string) => {
        // return string.match(/[$&+,:;=?@#|<>.\-^*()%!]+/g);
        // return string.match(/[W_]/);
        return string.match(/[=+;]/);
    }

    static validSpecialCharacterForTitle = string => {
        return string.match(/[!@$%^*=;{}|[<>\]~_]/);
    }

    /**
     * Check emoji icon in string
     */
    static validEmojiIcon = (string) => {
        return string.match(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
    }

    /**
     * Replace multiple space to single space
     */
    static validMultipleSpace = (string) => {
        return string.replace(/\s\s+/g, ' ');
    }

    static formatStringCash (cash, formatType = '.') {
        cash = cash.toString();
        let arrCash = cash.split('');
        arrCash = arrCash.reverse();
        var result = [];
        for (let i = 0; i < arrCash.length; i += 3) {
            for (let j = 0; j < 3; j++) {
                result.push(arrCash[i + j])
            }
            result.push(formatType);
        }
        result = result.reverse();
        result.splice(0, 1);
        result = result.join('') + `${formatType == '.' ? '' : ''}`;
        result = result + ' VND';
        return result;
    }

    static formatStringCashNoUnit (cash, formatType = '.') {
        cash = cash.toString();
        let arrCash = cash.split('');
        arrCash = arrCash.reverse();
        var result = [];
        for (let i = 0; i < arrCash.length; i += 3) {
            for (let j = 0; j < 3; j++) {
                result.push(arrCash[i + j])
            }
            result.push(formatType);
        }
        result = result.reverse();
        result.splice(0, 1);
        result = result.join('') + '₫';
        return result;
    }

    static randomString (length, chars) {
        var result = '';
        for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
        return result;
    }

    static formatNumScore (score) {
        return score == 0 || score == null ? 0 : score.toFixed(2)
    }

    /**
     * Counting words in string
     */
    static countWordsInString = (str) => {
        if (str.length === 0) {
            return 0
        } else {
            return str.trim().split(/\s+/).length;
        }
    }

    /**
     * get number in string
     */
    static getNumberInString = (str) => {
        var string = str.trim(); // ex: 
        var res = string.replace(/\D/g, "");
        return res;
    }

    /**
     * Sub string 
     * @param {*} str // string want to sub
     * @param {*} indexStart // begin from 0.
     * @param {*} indexEnd // index end
     */
    static subString (str, indexStart, indexEnd) {
        if (!Utils.isNull(str)) {
            return String(str).trim().substring(indexStart, indexEnd)
        } else {
            return 0
        }
    }

    /**
     * format licence plate
     * @param {*} str 
     */
    static formatLicencePlate (str) {
        var result = str.toUpperCase().trim().split('-').join("").split('.').join("").split(' ').join("")
        return result
    }

    /**
     * format phone space
     * @param {*} str 
     */
    static formatPhoneSpace (str) {
        var one = ""
        var two = ""
        var there = ""
        if (str.length == 10) {
            var one = str.slice(0, 3)
            var two = str.slice(3, 6)
            var there = str.slice(6, 10)
        } else if (str.length == 11) {
            var one = str.slice(0, 4)
            var two = str.slice(4, 7)
            var there = str.slice(7, 11)
        }
        return one + " " + two + " " + there
    }

    /**
     * Get format type price
     * @param {*} deviceLocale 
     */
    static getFormatTypePrice (deviceLocale) {
        if (deviceLocale == 'vi' || deviceLocale == 'vi-VN') {
            return ','
        } else if (deviceLocale == 'en-US' || deviceLocale == 'en' || deviceLocale == 'en-UK') {
            return '.'
        }
    }

    /**
     * Distance calculation
     * @param {*} origin
     * @param {*} destination
     */
    static distanceCalculation (origin, destination) {
        Number.prototype.toRad = function () {
            return this * Math.PI / 180
        }

        var lat2 = destination.latitude
        var lat1 = origin.latitude
        var lon1 = origin.longitude
        var lon2 = destination.longitude

        if (!Utils.isNull(lat1) && !Utils.isNull(lat2) && !Utils.isNull(lon1) && !Utils.isNull(lon2)) {
            var R = 6371; // km 
            //has a problem with the .toRad() method below.
            var x1 = lat2 - lat1
            var dLat = x1.toRad()
            var x2 = lon2 - lon1
            var dLon = x2.toRad()
            var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
            var d = R * c;
            if ((R * c) < 1) {
                d = (R * c) * 1000
                return Math.round(d) + " m"
            }
            return Math.round(d * 100) / 100 + " km"
        }
    }

    static containAZ = (string) => {
        return string.match(/[a-z]|[A-Z]/g);
    }

    static containNumber = (string) => {
        return string.match(/[0-9]/g);
    }

    static phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    static specialCharacter = /^(\s)*[^a-z0-9A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]*((\s)?((\'|\-|\.)?([A-Za-z])+))*(\s)*$/
    // static specialCharacter = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/
    static regexName = /^[A - Z]'?[- a-zA-Z]( [a-zA-Z])*$/

    static removeAccent = (str) => {
        let newStr = accent.remove(str);
        return newStr;
    }
}