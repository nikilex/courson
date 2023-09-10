/**
 *  Создание объекта с полными именами действий (MODULE_NAME/VAR)
 * @param MODULE
 * @returns {}
 */
const createFullNamesModules = (MODULE) => {
    const FN = {...MODULE}
    for (const property in MODULE) {
        FN[property] = `${MODULE.NAME}/${property}`
    }
    return FN
}

export {createFullNamesModules}