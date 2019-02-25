export const refresh = (field, nbr) => {
    return {
        type: 'REFRESH',
        field: field,
        nb: nbr + 1
    }
}