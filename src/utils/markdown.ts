const extractMetaData = (text: string): Array<any> =>{
    const metaData = {} as any;

    const metaRegExp = RegExp(/^---[\r\n](((?!---).|[\r\n])*)[\r\n]---$/m);
    // get metadata
    const rawMetaData = metaRegExp.exec(text);

    let keyValues;

    if (rawMetaData!) {
        // yaml header contents
        keyValues = rawMetaData[1].split("\n");

        keyValues.forEach((keyValue) => {
            console.log(keyValue);
            const [key, value] = keyValue.split(":");
            metaData[key] = value.trim();
        });
    }
    return [rawMetaData, metaData];
}

export {
    extractMetaData
}