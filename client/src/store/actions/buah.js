
export function actionCreate(data) {
    return {type: "buah/Create", payload: data}
}

// export function actionGetOne(id) {
//     return {type: "buah/GetOne", payload: {id: id}}
// }

export function actionEdit(data) {
    return {type: "buah/Edit", payload: data}
}

export function actionDelete(id) {
    return {type: "buah/Delete", payload: {id: id}}
}