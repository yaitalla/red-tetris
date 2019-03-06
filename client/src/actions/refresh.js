export const refresh = (field, nbr) => {
    return {
        type: 'REFRESH',
        field: field,
        nbr: nbr + 1
    }
}