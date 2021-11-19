export const newEl = (name, child = [], attr = []) => {
    /**
     * @type {DOMElement}
     */
    const el = document.createElement(name);

    for (const val of child) {
        el.appendChild(val);
    }

    for (const val of attr) {
        el.setAttribute(val.key, val.value);
    }

    return el;
}

export const newElFunc = (name, child = [], attr = []) => {
    return () => {
        return newEl(name, child, attr);
    }
}

export const faker = (model, ammout = 6) => {
    const res = [];

    for (let i = 0; i < ammout; i++) {
        res.push({ ...model });
    }

    return res;
}