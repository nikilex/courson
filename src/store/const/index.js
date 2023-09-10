import {
    createFullNamesModules
} from "./helpers"

import CHECKOUT_MODULE from "./modules/checkoutConst"

const FN_CHECKOUT_MODULE = createFullNamesModules(CHECKOUT_MODULE)

export {
    CHECKOUT_MODULE,
    FN_CHECKOUT_MODULE,
}