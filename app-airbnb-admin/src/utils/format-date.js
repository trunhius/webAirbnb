const format = require('date-format');

export const formatDate = (time) =>{
    return format.asString("dd.MM.yyyy", new Date(time))
}
