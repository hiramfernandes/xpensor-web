const dateFormatter = (strDate) => {
    if (!strDate)
        return '';

    return new Date(strDate).toLocaleDateString();    
}

export default dateFormatter;