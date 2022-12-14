import { createHeaders } from "."

const apiURL = "https://chonlawit-assignment-api.herokuapp.com/translations"

export const translationAdd = async (user, translation) => {
    try {
        const response = await fetch(`${ apiURL }/${ user.id }`, {
            method: 'PATCH',
            headers: createHeaders(),
            body: JSON.stringify({
                translations: [ ...user.translations, translation ]
            })
        })

        if (!response.ok) {
            throw new Error('Could not update the user')
        }

        const result = await response.json()
        return [ null, result ]

    } catch (error) {
        return [ error.message, null ]
    }
}

//POST - create new record
//PATCH - update parts of record
//GET - read record
//PUT - replace entire record
//DELETE - remove  a record
export const translationClearHistory = async (userId) => {
    try {
        const response = await fetch(`${ apiURL }/${ userId }`, {
            method: 'PATCH',
            headers: createHeaders(),
            body: JSON.stringify({
                translations: []
            })
        })
        if(!response.ok){
            throw new Error("Could not update translations")
        }
        const result = await response.json()

        return [null, result]

    } catch (error) {
        return [ error.message, null ]
    }
}