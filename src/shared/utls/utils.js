const dateFormatter = (date) => {
    if(!date) return;
    const d = date.split('T')[0].split('-');
    return `${d[2]}-${d[1]}-${d[0]}`
}

export {dateFormatter}