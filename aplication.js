const Application = {
    save () {
        const object = {
            columns: {
                idCOunter: 1,
                items: []
            },
            notes: {
                idCounter: 1,
                items: []
            }
        }

        document
            .querySelectorAll('.column')
            .forEach(columnElement => {
                const column = {
                    id: parseInt(columnElement.getAttribute('data-column-id')),
                    noteIds: []
                }

                object.columns.items.push(column)
            })


        return object 
    },

    load () {}
}